import { mitt } from './events'
import { parseClassName } from './parser'


export type XCSSConfig = {
    base?: string
    aliases?: Record<string, string[]>
    excludes?: string[]
    excludePrefixes?: string[]
    breakpoints?: Record<string, string>[]
    theme?: Record<string, string>
    prefix?: string
    dictionaryImport?: boolean | string
    cache?: {
        styleId?: string
        version?: string
        compression?: boolean
        debounceMs?: number
    }
}

type CssPropertyMap = Record<string, string>
type CssValueMap = Record<string, Record<string, string>>
type CssCommonValueMap = Record<string, string>

type XCSSDictionaryData = {
    SHORT_PROPERTIES: CssPropertyMap
    COMMON_VALUES: CssCommonValueMap
    SPECIFIC_VALUES: CssValueMap
}

type DictionaryModuleShape = Partial<XCSSDictionaryData> & {
    default?: Partial<XCSSDictionaryData>
}

type XCSSCacheConfig = {
    styleId: string
    version: string
    compression: boolean
    debounceMs: number
}

type XCSSCacheEnvelopeLZW = {
    __xcss_cache_v: 2
    compressed: true
    payload: string
}

type XCSSCacheEnvelopeStream = {
    __xcss_cache_v: 3
    compressed: true
    algorithm: 'deflate-raw'
    encoding: 'base64'
    payload: string
}



const resolveCacheConfig = (config?: XCSSConfig['cache']): XCSSCacheConfig => {
    const styleId =
        typeof config?.styleId === 'string' && config.styleId.trim()
            ? config.styleId.trim()
            : 'fwkui'
    const version =
        typeof config?.version === 'string' && config.version.trim()
            ? config.version.trim()
            : 'v1'
    const compression = config?.compression ?? true
    const debounceMs =
        typeof config?.debounceMs === 'number' && config.debounceMs >= 0
            ? config.debounceMs
            : 1000

    return { styleId, version, compression, debounceMs }
}

const createCacheKey = (cache: XCSSCacheConfig): string => `${cache.styleId}_cache_${cache.version}`
const createSizeLastKey = (cache: XCSSCacheConfig): string => `${cache.styleId}_sizeL_${cache.version}`

const isCacheEnvelopeLZW = (value: unknown): value is XCSSCacheEnvelopeLZW => {
    if (!value || typeof value !== 'object') return false
    const obj = value as Partial<XCSSCacheEnvelopeLZW>
    return obj.__xcss_cache_v === 2 && obj.compressed === true && typeof obj.payload === 'string'
}

const isCacheEnvelopeStream = (value: unknown): value is XCSSCacheEnvelopeStream => {
    if (!value || typeof value !== 'object') return false
    const obj = value as Partial<XCSSCacheEnvelopeStream>
    return (
        obj.__xcss_cache_v === 3 &&
        obj.compressed === true &&
        obj.algorithm === 'deflate-raw' &&
        obj.encoding === 'base64' &&
        typeof obj.payload === 'string'
    )
}

const canUseCompressionStream = (): boolean =>
    typeof CompressionStream !== 'undefined' &&
    typeof Blob !== 'undefined' &&
    typeof Response !== 'undefined'

const canUseDecompressionStream = (): boolean =>
    typeof DecompressionStream !== 'undefined' &&
    typeof Blob !== 'undefined' &&
    typeof Response !== 'undefined'

const bytesToBase64 = (bytes: Uint8Array): string => {
    if (typeof btoa === 'function') {
        let binary = ''
        const CHUNK_SIZE = 0x8000
        for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
            const chunk = bytes.subarray(i, i + CHUNK_SIZE)
            for (let j = 0; j < chunk.length; j++) {
                binary += String.fromCharCode(chunk[j])
            }
        }
        return btoa(binary)
    }

    const buff = (globalThis as any).Buffer
    if (typeof buff !== 'undefined') {
        return buff.from(bytes).toString('base64')
    }

    throw new Error('XCSS: base64 encoding is not supported in this runtime')
}

const base64ToBytes = (base64: string): Uint8Array => {
    if (typeof atob === 'function') {
        const binary = atob(base64)
        const bytes = new Uint8Array(binary.length)
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i)
        }
        return bytes
    }

    const buff = (globalThis as any).Buffer
    if (typeof buff !== 'undefined') {
        return new Uint8Array(buff.from(base64, 'base64'))
    }

    throw new Error('XCSS: base64 decoding is not supported in this runtime')
}

const compressDeflateRawBase64 = async (input: string): Promise<string> => {
    if (!canUseCompressionStream()) {
        throw new Error('XCSS: CompressionStream is not supported')
    }

    const stream = new Blob([input])
        .stream()
        .pipeThrough(new CompressionStream('deflate-raw'))

    const compressed = await new Response(stream).arrayBuffer()
    return bytesToBase64(new Uint8Array(compressed))
}

const decompressDeflateRawBase64 = async (payload: string): Promise<string> => {
    if (!canUseDecompressionStream()) {
        throw new Error('XCSS: DecompressionStream is not supported')
    }

    const bytes = base64ToBytes(payload)
    const normalized = new Uint8Array(bytes.length)
    normalized.set(bytes)
    const stream = new Blob([normalized.buffer])
        .stream()
        .pipeThrough(new DecompressionStream('deflate-raw'))

    return await new Response(stream).text()
}

const isStreamCacheEnvelopeRaw = (raw: string): boolean => {
    try {
        const parsed = JSON.parse(raw)
        return isCacheEnvelopeStream(parsed)
    } catch (_error) {
        return false
    }
}

const compressLZW = (input: string): string => {
    if (!input) return ''

    const dictionary = new Map<string, number>()
    const codes: number[] = []
    let dictSize = 256

    for (let i = 0; i < 256; i++) {
        dictionary.set(String.fromCharCode(i), i)
    }

    let phrase = input[0]
    for (let i = 1; i < input.length; i++) {
        const currentChar = input[i]
        const phraseWithChar = phrase + currentChar
        if (dictionary.has(phraseWithChar)) {
            phrase = phraseWithChar
        } else {
            codes.push(dictionary.get(phrase)!)
            dictionary.set(phraseWithChar, dictSize++)
            phrase = currentChar
        }
    }
    codes.push(dictionary.get(phrase)!)

    return codes.map((code) => String.fromCharCode(code)).join('')
}

const decompressLZW = (compressed: string): string => {
    if (!compressed) return ''

    const dictionary = new Map<number, string>()
    let dictSize = 256
    let result = ''

    for (let i = 0; i < 256; i++) {
        dictionary.set(i, String.fromCharCode(i))
    }

    const codes = compressed.split('').map((char) => char.charCodeAt(0))
    let previous = codes[0]
    let phrase = dictionary.get(previous) || ''
    result = phrase

    for (let i = 1; i < codes.length; i++) {
        const current = codes[i]
        let entry = dictionary.get(current)
        if (!entry) {
            entry = current === dictSize ? phrase + phrase[0] : ''
        }
        result += entry
        dictionary.set(dictSize++, phrase + entry[0])
        phrase = entry
    }

    return result
}

const resolveDictionaryData = (mod: unknown): XCSSDictionaryData | null => {
    if (!mod || typeof mod !== 'object') return null

    const moduleObj = mod as DictionaryModuleShape
    const source =
        moduleObj.default && typeof moduleObj.default === 'object'
            ? moduleObj.default
            : moduleObj

    const short = source.SHORT_PROPERTIES
    const common = source.COMMON_VALUES
    const specific = source.SPECIFIC_VALUES

    if (!short || !common || !specific) return null
    if (
        typeof short !== 'object' ||
        typeof common !== 'object' ||
        typeof specific !== 'object'
    ) {
        return null
    }

    return {
        SHORT_PROPERTIES: short,
        COMMON_VALUES: common,
        SPECIFIC_VALUES: specific,
    }
}

const loadExternalDictionary = async (source: string): Promise<XCSSDictionaryData> => {
    const mod = await import(/* @vite-ignore */ source)
    const data = resolveDictionaryData(mod)
    if (!data) {
        throw new Error(DICTIONARY_MODULE_ERROR)
    }
    return data
}

const DICTIONARY_MODULE_ERROR =
    'XCSS: dictionary module must export SHORT_PROPERTIES, COMMON_VALUES and SPECIFIC_VALUES'

const loadBuiltinDictionarySync = (): XCSSDictionaryData | null => {
    // Keep Node compatibility for synchronous flows (SSR/tests in CJS).
    const req = typeof require === 'function' ? require : null
    if (!req) return null

    for (const source of ['./dictionary.js', './dictionary']) {
        try {
            const mod = req(source)
            const data = resolveDictionaryData(mod)
            if (data) return data
        } catch (_error) {
            // try next candidate
        }
    }
    return null
}

const loadBuiltinDictionary = async (): Promise<XCSSDictionaryData> => {
    const syncData = loadBuiltinDictionarySync()
    if (syncData) return syncData

    const candidates = ['./dictionary.mjs', './dictionary.js', './dictionary']
    let lastError: unknown = null

    for (const source of candidates) {
        try {
            const mod = await import(/* @vite-ignore */ source)
            const data = resolveDictionaryData(mod)
            if (data) return data
        } catch (error) {
            lastError = error
        }
    }

    if (lastError) throw lastError
    throw new Error(DICTIONARY_MODULE_ERROR)
}

const setupCssLayers = (docRoot: Document | ShadowRoot | null, id?: string) => {
    if (!docRoot || typeof document === 'undefined') return
    id = id || 'fwkui'

    // Tạo danh sách các layer
    const layers = Array.from({ length: 24 }, (_, i) => {
        return 'l' + i
    })



    // Tạo <style> element
    if (!docRoot.querySelector('style[id="' + id + '"]')) {
        const styleElement = document.createElement('style')
        styleElement.id = id
        if (!(docRoot instanceof ShadowRoot)) {
            document.head.append(styleElement)
        } else {
            // docRoot.appendChild(styleElement);
            try {
                docRoot.prepend(styleElement)
            } catch (e) {
                docRoot.appendChild(styleElement)
            }
        }

        // Chèn quy tắc @layer
        const layerRule = `@layer ${layers.join(', ')};`
        // Use requestAnimationFrame or setTimeout instead of setInterval for cleaner approach if possible,
        // keeping setInterval to match original logic but with clear logic.
        let iterval = setInterval(() => {
            if (styleElement.sheet) {
                clearInterval(iterval)
                try {
                    styleElement.sheet.insertRule(
                        layerRule,
                        styleElement.sheet.cssRules.length,
                    )
                } catch (e) {
                    // ignore error if insertRule fails
                }
            }
        }, 10) // 10ms check
    }
}

// Helper to hash config
const hashConfig = (config: XCSSConfig): string => {
    const excludes = Array.isArray(config.excludes)
        ? config.excludes : []
    const cache = resolveCacheConfig(config.cache)

    const str = JSON.stringify({
        base: config.base || '',
        aliases: config.aliases || {},
        breakpoints: config.breakpoints || [],
        theme: config.theme || {},
        prefix: config.prefix || '',
        excludes,
        excludePrefixes: config.excludePrefixes || [],
        dictionaryImport: config.dictionaryImport ?? true,
        cache,
    })

    let hash = 0
    if (str.length === 0) return hash.toString()
    for (let i = 0; i < str.length; i++) {
        const chr = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0
    }
    return hash.toString()
}

interface XCSSCacheData {
    configHash: string
    cssText: Record<string, string>
    rulesSet: Record<string, string[]>
    keys: [string, string][],
    sizeLast: number
}

/**
 * Hàm factory chính để khởi tạo và cấu hình engine xcss.
 */
const parseCacheDataSync = (raw: string | null): XCSSCacheData | null => {
    if (!raw) return null
    try {
        const parsed = JSON.parse(raw)
        if (isCacheEnvelopeLZW(parsed)) {
            const expanded = decompressLZW(parsed.payload)
            if (!expanded) return null
            const data = JSON.parse(expanded) as XCSSCacheData
            return data
        }
        if (isCacheEnvelopeStream(parsed)) return null
        return parsed as XCSSCacheData
    } catch (_error) {
        return null
    }
}

const parseCacheDataAsync = async (raw: string | null): Promise<XCSSCacheData | null> => {
    if (!raw) return null
    try {
        const parsed = JSON.parse(raw)
        if (isCacheEnvelopeLZW(parsed)) {
            const expanded = decompressLZW(parsed.payload)
            if (!expanded) return null
            return JSON.parse(expanded) as XCSSCacheData
        }
        if (isCacheEnvelopeStream(parsed)) {
            const expanded = await decompressDeflateRawBase64(parsed.payload)
            if (!expanded) return null
            return JSON.parse(expanded) as XCSSCacheData
        }
        return parsed as XCSSCacheData
    } catch (_error) {
        return null
    }
}

const unwrapCachedCssText = (mediaKey: string, text: string): string => {
    if (mediaKey === 'root') return text
    const match = /@media[^{]+\{\n?([\s\S]+)\n?\}/.exec(text)
    if (match && match[1]) return match[1].trim()
    return text
}

/**
 * Hàm factory chính để khởi tạo và cấu hình engine xcss.
 */
export const xcss = (
    modules: XCSSConfig = {
        base: '',
        aliases: {},
        excludes: [],
        excludePrefixes: [],
        breakpoints: [],
        theme: {},
        prefix: '',
        dictionaryImport: true,
        cache: {
            styleId: 'fwkui',
            version: 'v1',
            compression: true,
            debounceMs: 1000,
        },
    },
) => {

    let {
        base: cssDefault = null,
        breakpoints: mediaQuery = [],
        aliases: groupValues = {},
        theme: valueExt = {},
        excludes: excludeNames = [],
        excludePrefixes = [],
        prefix = '',
        dictionaryImport = true,
        cache: cacheOptions = {},
    } = modules || {}

    if (!Array.isArray(mediaQuery)) mediaQuery = []
    if (!Array.isArray(excludeNames)) excludeNames = []
    if (!Array.isArray(excludePrefixes)) excludePrefixes = []
    if (!groupValues || typeof groupValues !== 'object') groupValues = {}
    if (!valueExt || typeof valueExt !== 'object') valueExt = {}

    const cacheConfig = resolveCacheConfig(cacheOptions)
    const cacheKey = createCacheKey(cacheConfig)

    const mergedExcludes = excludeNames

    const normalizedExcludePrefixes = excludePrefixes
        .filter((x): x is string => typeof x === 'string')
        .map((x) => x.trim())
        .filter((x) => x.length > 0)

    const globToRegex = (pattern: string): RegExp => {
        const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&')
        return new RegExp('^' + escaped.replace(/\*/g, '.*') + '$')
    }

    const excludeRules = mergedExcludes
        .filter((x): x is string => typeof x === 'string')
        .map((x) => x.trim())
        .filter((x) => x.length > 0)
        .map((pattern) => {
            if (pattern.includes('*')) {
                const regex = globToRegex(pattern)
                return (cls: string) => regex.test(cls)
            }
            return (cls: string) => cls === pattern
        })

    const isExcludedClass = (txtClass: string): boolean => {
        if (normalizedExcludePrefixes.some((prefixText) => txtClass.startsWith(prefixText))) {
            return true
        }
        return excludeRules.some((rule) => rule(txtClass))
    }

    const shouldProcessClass = (txtClass: string): boolean => {
        // Step 1: Exclude rules first.
        if (isExcludedClass(txtClass)) return false
        // Step 2: Prefix check.
        if (prefix && !txtClass.startsWith(prefix)) return false
        return true
    }

    const defaultMediaKeys = ['default', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'sma', 'mda', 'lga', 'xla']
    const customMediaKeys = mediaQuery
        .filter((m): m is Record<string, string> => !!m && typeof m === 'object' && !Array.isArray(m))
        .map((m) => Object.keys(m)[0])
        .filter((k): k is string => typeof k === 'string' && k.length > 0)
    const mediaKeySet = new Set<string>([...defaultMediaKeys, ...customMediaKeys])
    const isValidMediaKey = (mq?: string): boolean => !mq || mediaKeySet.has(mq)
    const shouldEnforceKnownProperties = dictionaryImport !== false
    const compositePropertyKeys = new Set(['mx', 'my', 'px', 'py', 'bdx', 'bdy'])
    let knownFullPropertyNames = new Set<string>()
    const isKnownPropertyKey = (prop: string): boolean => {
        if (!prop) return false
        if (!shouldEnforceKnownProperties) return true
        if (!PropertiesCss || Object.keys(PropertiesCss).length === 0) return true
        return !!PropertiesCss[prop] || compositePropertyKeys.has(prop) || knownFullPropertyNames.has(prop)
    }

    let PropertiesCss: CssPropertyMap = {}
    let ValueExts: CssValueMap = {}
    let CommonValues: CssCommonValueMap = {}
    let exts: Record<string, string> = {}

    const rebuildExts = () => {
        exts = {
            ...CommonValues,
            ...valueExt,
        }
    }

    const applyDictionary = (dictionary: XCSSDictionaryData | null) => {
        if (!dictionary) {
            PropertiesCss = {}
            ValueExts = {}
            CommonValues = {}
            knownFullPropertyNames = new Set()
            rebuildExts()
            return
        }

        PropertiesCss = dictionary.SHORT_PROPERTIES
        ValueExts = dictionary.SPECIFIC_VALUES
        CommonValues = dictionary.COMMON_VALUES
        knownFullPropertyNames = new Set(Object.values(PropertiesCss))
        rebuildExts()
    }

    let dictionaryReady = true
    let dictionaryReadyPromise: Promise<void> = Promise.resolve()

    if (dictionaryImport === false) {
        applyDictionary(null)
    } else if (typeof dictionaryImport === 'string') {
        dictionaryReady = false
        applyDictionary(null)
        dictionaryReadyPromise = loadExternalDictionary(dictionaryImport)
            .then((dictionary) => {
                applyDictionary(dictionary)
            })
            .catch((error) => {
                console.warn('XCSS: Failed to import dictionary from URL', error)
            })
            .finally(() => {
                dictionaryReady = true
            })
    } else {
        const syncBuiltinDictionary = loadBuiltinDictionarySync()
        if (syncBuiltinDictionary) {
            applyDictionary(syncBuiltinDictionary)
        } else {
            dictionaryReady = false
            applyDictionary(null)
            dictionaryReadyPromise = loadBuiltinDictionary()
                .then((dictionary) => {
                    applyDictionary(dictionary)
                })
                .catch((error) => {
                    console.warn('XCSS: Failed to load built-in dictionary module', error)
                })
                .finally(() => {
                    dictionaryReady = true
                })
        }
    }

    let lastKnownCacheData: XCSSCacheData | null = null



    const buildCss = (doc: Document | ShadowRoot | Element | undefined = typeof document !== 'undefined' ? document : undefined) => {
        // If running in non-browser environment without a doc, we can still simulate for extraction
        const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'
        let docRoot: Document | ShadowRoot | null = null
        const hasBaseOverride = Array.isArray(cssDefault) ? cssDefault.length > 0 : !!cssDefault

        if (doc) {
            docRoot = 'getRootNode' in doc ? (doc.getRootNode() as Document | ShadowRoot) : (doc as any)
        }

        const CSS_KEYS = new Map<string, string>();
        const CSS_VALUES = new Set<string>(); // Set song song để check trùng O(1)
        let sizeLast = 1000;
        const sizeLastKey = createSizeLastKey(cacheConfig);

        // Setup layers if in browser
        if (isBrowser && docRoot) {
            setupCssLayers(docRoot, cacheConfig.styleId)
        }

        let emitter = mitt()
        let mqDfAll = [
            { default: '' },
            { xs: 'screen and (max-width: 575px)' },
            { sm: 'screen and (min-width: 576px)' },
            { md: 'screen and (min-width: 768px)' },
            { lg: 'screen and (min-width: 992px)' },
            { xl: 'screen and (min-width: 1200px)' },
            { '2xl': 'screen and (min-width: 1400px)' },
            { sma: 'screen and (max-width: 768px)' },
            { mda: 'screen and (max-width: 992px)' },
            { lga: 'screen and (max-width: 1200px)' },
            { xla: 'screen and (max-width: 1400px)' },
            ...mediaQuery,
        ]

        let mqDf = mqDfAll.filter(
            (f, i) =>
                mqDfAll.findLastIndex(
                    (fi: any) => Object.keys(fi)[0] == Object.keys(f)[0],
                ) == i,
        )

        let keysCssStyleSheetsDom = mqDf.map((m) => Object.keys(m)[0])

        const cssStyleSheetsSet: Record<string, Set<string>> = {}
        const cssStyleSheetsDom: Record<string, CSSStyleSheet> = {}

        // Store text content for SSR/Extraction
        const cssStyleSheetsText: Record<string, string> = { root: '' }
        const cssStyleSheetsPending: Record<string, string[]> = { root: [] }
        const cssStyleSheetsPendingScheduled: Record<string, boolean> = { root: false }

        // Cache Key & Logic
        let currentConfigHash = hashConfig(modules)
        let debounceTimer: any = null
        let latestSaveTicket = 0
        let cacheLoaded = false
        let loadedCacheData: XCSSCacheData | null = null
        let asyncCacheCandidate: { raw: string } | null = null

        const writeCache = (value: string) => {
            try {
                window.localStorage.setItem(cacheKey, value)
            } catch (e) {
                console.warn('XCSS: Failed to save cache', e)
            }
        }

        // Đồng bộ sizeLast từ localStorage (lấy giá trị lớn nhất)
        const syncSizeLast = () => {
            if (!isBrowser || !window.localStorage) return
            try {
                const stored = parseInt(window.localStorage.getItem(sizeLastKey) || '0', 10)
                if (stored > sizeLast) sizeLast = stored
            } catch (_e) {}
        }

        // Ghi sizeLast vào localStorage ngay lập tức
        const saveSizeLast = () => {
            if (!isBrowser || !window.localStorage) return
            try {
                window.localStorage.setItem(sizeLastKey, String(sizeLast))
            } catch (_e) {}
        }

        const removeCacheIfUnchanged = (expectedRaw?: string) => {
            if (!isBrowser || !window.localStorage) return

            if (typeof expectedRaw === 'string') {
                const currentRaw = window.localStorage.getItem(cacheKey)
                if (currentRaw !== expectedRaw) return
            }

            window.localStorage.removeItem(cacheKey)
        }

        const saveCache = (data: XCSSCacheData) => {
            if (!isBrowser || !window.localStorage) return
            lastKnownCacheData = data
            const ticket = ++latestSaveTicket
            try {
                const json = JSON.stringify(data)

                const writeLZWEnvelope = () => {
                    const envelope: XCSSCacheEnvelopeLZW = {
                        __xcss_cache_v: 2,
                        compressed: true,
                        payload: compressLZW(json),
                    }
                    writeCache(JSON.stringify(envelope))
                }

                if (!cacheConfig.compression) {
                    writeCache(json)
                    return
                }

                if (canUseCompressionStream() && canUseDecompressionStream()) {
                    void compressDeflateRawBase64(json)
                        .then((payload) => {
                            if (ticket !== latestSaveTicket) return
                            const envelope: XCSSCacheEnvelopeStream = {
                                __xcss_cache_v: 3,
                                compressed: true,
                                algorithm: 'deflate-raw',
                                encoding: 'base64',
                                payload,
                            }
                            writeCache(JSON.stringify(envelope))
                        })
                        .catch(() => {
                            if (ticket !== latestSaveTicket) return
                            writeLZWEnvelope()
                        })
                    return
                }

                writeLZWEnvelope()
            } catch (e) {
                console.warn('XCSS: Failed to save cache', e)
            }
        }

        const triggerSave = () => {
            if (!isBrowser) return
            if (debounceTimer) clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => {
                const rulesSetObj: Record<string, string[]> = {}
                for (const k in cssStyleSheetsSet) {
                    rulesSetObj[k] = Array.from(cssStyleSheetsSet[k])
                }

                // Prepare CSS Text with @media wrapping for Bootloader
                const cssTextForCache: Record<string, string> = {}
                Object.keys(cssStyleSheetsText).forEach(k => {
                    if (k === 'root') {
                        cssTextForCache[k] = cssStyleSheetsText[k]
                    } else {
                        const mqStr = mqDfAll.find(m => Object.keys(m)[0] === k)?.[k]
                        // Only wrap if meaningful content
                        if (mqStr && cssStyleSheetsText[k]) {
                            cssTextForCache[k] = `@media ${mqStr} {\n${cssStyleSheetsText[k]}\n}`
                        } else {
                            cssTextForCache[k] = cssStyleSheetsText[k] || ''
                        }
                    }
                })

                const data: XCSSCacheData = {
                    configHash: currentConfigHash,
                    cssText: cssTextForCache,
                    rulesSet: rulesSetObj,
                    keys: Array.from(CSS_KEYS.entries()),
                    sizeLast: sizeLast
                }
                saveSizeLast()
                saveCache(data)
            }, cacheConfig.debounceMs)
        }

        // Tải cache (đồng bộ) — chỉ sử dụng 1 key duy nhất
        if (isBrowser && window.localStorage) {
            try {
                const raw = window.localStorage.getItem(cacheKey)
                if (raw) {
                    const data = parseCacheDataSync(raw)
                    if (!data) {
                        // Nếu là stream-compressed thì xử lý bất đồng bộ sau
                        if (isStreamCacheEnvelopeRaw(raw)) {
                            asyncCacheCandidate = { raw }
                        } else {
                            window.localStorage.removeItem(cacheKey)
                        }
                    } else if (data.configHash !== currentConfigHash) {
                        // Config đã thay đổi, xóa cache cũ
                        window.localStorage.removeItem(cacheKey)
                    } else {
                        loadedCacheData = data
                        cacheLoaded = true

                        // Khôi phục CSS_KEYS
                        if (data.keys) {
                            data.keys.forEach(([k, v]) => { CSS_KEYS.set(k, v); CSS_VALUES.add(v) })
                        }
                        // Khôi phục sizeLast — lấy max giữa cache data và localStorage
                        if (typeof data.sizeLast === 'number') {
                            sizeLast = data.sizeLast
                        }
                        syncSizeLast()
                        saveSizeLast()
                        // Khôi phục cssText (unwrap cho sử dụng nội bộ)
                        if (data.cssText) {
                            for (const k in data.cssText) {
                                cssStyleSheetsText[k] = unwrapCachedCssText(k, data.cssText[k])
                            }
                        }
                        lastKnownCacheData = data
                    }
                }
            } catch (e) { console.error(e) }
        }

        // Init sheets & Finish Hydration
        if (isBrowser) {
            cssStyleSheetsDom['root'] = new CSSStyleSheet()
        }

        keysCssStyleSheetsDom.forEach((k) => {
            cssStyleSheetsSet[k] = new Set()
            if (isBrowser) {
                const media = mqDf.find((m) => Object.keys(m)[0] == k)?.[k] || ''
                cssStyleSheetsDom[k] = new CSSStyleSheet({ media })
            }
            // If NOT loaded from cache, ensure empty.
            if (!cacheLoaded) {
                cssStyleSheetsText[k] = ''
            }
            cssStyleSheetsPending[k] = []
            cssStyleSheetsPendingScheduled[k] = false
        })

        const removeBootloaderStyle = () => {
            if (!docRoot) return
            const blStyle = docRoot.querySelector(`style[id="${cacheConfig.styleId}"]`)
            if (blStyle) blStyle.remove()
        }

        const hydrateCacheAfterInit = (data: XCSSCacheData) => {
            if (data.keys) {
                data.keys.forEach(([k, v]) => { CSS_KEYS.set(k, v); CSS_VALUES.add(v) })
            }
            // Khôi phục sizeLast — lấy max giữa cache data và localStorage
            if (typeof data.sizeLast === 'number') {
                sizeLast = data.sizeLast
            }
            syncSizeLast()
            saveSizeLast()

            if (data.cssText) {
                for (const k in data.cssText) {
                    if (k === 'root' && hasBaseOverride) continue

                    const txt = unwrapCachedCssText(k, data.cssText[k])
                    cssStyleSheetsText[k] = txt
                    if (isBrowser && cssStyleSheetsDom[k]) {
                        cssStyleSheetsDom[k].replaceSync(txt)
                    }
                }
            }

            if (data.rulesSet) {
                for (const k in data.rulesSet) {
                    if (!cssStyleSheetsSet[k]) cssStyleSheetsSet[k] = new Set()
                    data.rulesSet[k].forEach(r => cssStyleSheetsSet[k].add(r))
                }
            }

            lastKnownCacheData = data
            removeBootloaderStyle()
        }

        // Post-Init Hydration: Populate from sync cache
        if (cacheLoaded && loadedCacheData) {
            hydrateCacheAfterInit(loadedCacheData)
        }

        if (cssDefault && Array.isArray(cssDefault)) {
            cssStyleSheetsText.root = cssDefault.join('\n')
            if (isBrowser && cssStyleSheetsDom.root) {
                cssStyleSheetsDom.root.replaceSync(cssStyleSheetsText.root)
            }
        } else {
            cssStyleSheetsText.root = (cssDefault as string) || ''
            if (isBrowser && cssStyleSheetsDom.root) {
                cssStyleSheetsDom.root.replaceSync(cssStyleSheetsText.root)
            }
        }

        if (isBrowser && docRoot) {
            ['root', ...keysCssStyleSheetsDom].forEach((k) => {
                if (cssStyleSheetsDom[k] && docRoot?.adoptedStyleSheets) {
                    if (!docRoot.adoptedStyleSheets.includes(cssStyleSheetsDom[k])) {
                        docRoot.adoptedStyleSheets = [
                            ...docRoot.adoptedStyleSheets,
                            cssStyleSheetsDom[k],
                        ]
                    }
                }
            })
        }

        // Xử lý bất đồng bộ cho cache stream-compressed
        if (isBrowser && window.localStorage && asyncCacheCandidate && !cacheLoaded) {
            void (async () => {
                const data = await parseCacheDataAsync(asyncCacheCandidate!.raw)
                if (!data) {
                    removeCacheIfUnchanged(asyncCacheCandidate!.raw)
                    return
                }
                if (data.configHash !== currentConfigHash) {
                    removeCacheIfUnchanged(asyncCacheCandidate!.raw)
                    return
                }
                cacheLoaded = true
                loadedCacheData = data
                hydrateCacheAfterInit(data)
            })()
        }

        // Lắng nghe storage event để đồng bộ sizeLast từ tab khác
        if (isBrowser && window.addEventListener) {
            window.addEventListener('storage', (e) => {
                if (e.key === sizeLastKey && e.newValue) {
                    const newVal = parseInt(e.newValue, 10)
                    if (newVal > sizeLast) sizeLast = newVal
                }
            })
        }

        const updateRules = (txtCls: string, d: any) => {
            let { media, property, selector, layer, className } = d

            let cssTextStore = cssStyleSheetsText
            let cssPending = cssStyleSheetsPending
            let cssPendingScheduled = cssStyleSheetsPendingScheduled

            layer = Number(layer) || 0
            // let classNameStr2 = className
            let cssExts = CSS_KEYS.get(txtCls)
            let cssName = cssExts
                ? `.${cssExts}${selector}`
                : `.${className}${selector}`

            var txtCss = `@layer l${layer}{${cssName}{${property}}}`

            if (!cssStyleSheetsSet[media]) {
                // Fallback or init if missing
                cssStyleSheetsSet[media] = new Set()
            }

            let cssStyleSheetSet = cssStyleSheetsSet[media]

            if (!cssStyleSheetSet.has(txtCss)) {
                cssStyleSheetSet.add(txtCss)

                // Add valid media/pending arrays if missed
                if (!cssPending[media]) cssPending[media] = []

                cssPending[media].push(txtCss)

                // If not in browser, we can just sync immediately or keep it pending
                // But for SSR extraction, we want it in cssTextStore
                if (!isBrowser) {
                    const pending = cssPending[media]
                    if (pending.length > 0) {
                        cssTextStore[media] += (cssTextStore[media] ? '\n' : '') + pending.join('\n')
                        cssPending[media] = []
                    }
                } else {
                    if (!cssPendingScheduled[media]) {
                        cssPendingScheduled[media] = true
                        queueMicrotask(() => {
                            const pending = cssPending[media]
                            const sheet = cssStyleSheetsDom[media]
                            if (pending.length > 0) {
                                cssTextStore[media] +=
                                    (cssTextStore[media] ? '\n' : '') + pending.join('\n')
                                if (sheet) {
                                    sheet.replaceSync(cssTextStore[media])
                                }
                                cssPending[media] = []
                                triggerSave() // TRIGGER SAVE CACHE
                            }
                            cssPendingScheduled[media] = false
                        })
                    }
                }
            }
        }

        const applyObservedItems = (items: string[]) => {
            items.forEach((cls) => {
                let item = classToProp(cls)
                item && updateRules(cls, item)
            })
        }

        const processObservedItems = (items: string[]) => {
            if (items.length === 0) return

            const run = () => applyObservedItems(items)
            if (dictionaryReady) {
                run()
            } else {
                dictionaryReadyPromise.then(run)
            }
        }

        emitter.on('observeDom' as any, processObservedItems)

        const clsx = (...clsArrs: any[]) => {
            let lsCss = clsArrs
                .map((m) => (Array.isArray(m) ? m : [m]))
                .flat(Infinity)
                .map((m) => (typeof m === 'string' ? m.split(/(\s|\t)+/g) : []))
                .flat(Infinity) as string[]

            lsCss = lsCss.filter((m) => typeof m === 'string' && m.trim())

            lsCss = [...new Set(lsCss)]

            const shouldHashClass = (txtClass: string): boolean => {
                if (!shouldProcessClass(txtClass)) return false

                if (dictionaryReady) {
                    return !!classToProp(txtClass)
                }

                const parseTarget = prefix ? txtClass.slice(prefix.length) : txtClass
                const parsed = parseClassName(parseTarget)
                if (!parsed) return false
                if (!isValidMediaKey(parsed.mq)) return false

                const selectorStr = (parsed.selector || '').replace(/(';|;)/g, (v: string) => (v == "';" ? ';' : ' '))
                if (selectorStr && !isLikelyValidSelectorFallback(selectorStr)) return false

                if (parsed.prop.startsWith('[')) {
                    return !!propsValueExt(parsed.prop + parsed.val)
                }
                if (!isKnownPropertyKey(parsed.prop)) return false
                if (parsed.prop === '&') return parsed.val.length > 0
                return parsed.val.length > 0
            }

            let lsClassNew = lsCss.map((l: string) => {
                let item = l
                if (CSS_KEYS.has(l)) {
                    item = CSS_KEYS.get(l)!
                } else {
                    // Only hash class names that can actually generate valid CSS.
                    // Invalid/unsupported tokens (e.g. "bs-a") must stay raw.
                    if (shouldHashClass(l)) {
                        // Đồng bộ sizeLast từ localStorage trước khi tạo key mới
                        syncSizeLast()
                        let key: string
                        do {
                            key = 'D' + (sizeLast++).toString(32).toUpperCase()
                        } while (CSS_VALUES.has(key))
                        CSS_KEYS.set(l, key)
                        CSS_VALUES.add(key)
                        item = key
                        saveSizeLast() // Ghi sizeLast ngay vào localStorage
                        triggerSave() // LƯU CACHE
                    }
                }

                return item
            })

            // Emit event to update styles
            // In SSR/Non-browser, we might want to sync immediately?
            // Emit event to update styles
            // In SSR/Non-browser, sync immediately for extraction support
            if (!isBrowser) {
                emitter.emit('observeDom' as any, lsCss)
            } else {
                queueMicrotask(() => emitter.emit('observeDom' as any, lsCss))
            }

            return lsClassNew.join(' ')
        }

        const observe = () => {
            if (!isBrowser || !docRoot) return
            observeDom(docRoot as Document | Element | ShadowRoot, (items) => {
                processObservedItems(items)
            })
        }

        const getCssString = () => {
            return Object.entries(cssStyleSheetsText).map(([media, css]) => {
                if (!css) return ''
                if (media === 'root' || media === 'default') return css
                // Wrap in media query
                const mediaQueryStr = mqDfAll.find(m => Object.keys(m)[0] === media)?.[media]
                if (mediaQueryStr) {
                    return `@media ${mediaQueryStr} {\n${css}\n}`
                }
                return css
            }).join('\n')
        }

        return { clsx, observe, getCssString }
    }


    function propsValueExt(txtProps: string) {
        const REGEX_CSS = new RegExp('^(\\[(?<p>[a-zA-Z]+)\\])$')
        let { p = '' } = REGEX_CSS.exec(txtProps)?.groups ?? {}
        if (p && groupValues[p] && Array.isArray(groupValues[p])) {
            let cssProp = groupValues[p]

            let resolvedProps: string[] = []
            let isAllValidUtilities = true
            const normalizeAliasDeclaration = (input: string): string | null => {
                const text = input.trim()
                if (!text) return null

                const cleaned = text.endsWith(';') ? text.slice(0, -1).trim() : text
                const colonIndex = cleaned.indexOf(':')
                if (colonIndex <= 0 || colonIndex >= cleaned.length - 1) return null

                const prop = cleaned.slice(0, colonIndex).trim()
                const value = cleaned.slice(colonIndex + 1).trim()
                if (!prop || !value) return null
                if (!/^(?:--[a-zA-Z0-9-_]+|-?[a-zA-Z][a-zA-Z0-9-]*)$/.test(prop)) return null

                return `${prop}:${value}`
            }

            for (const cls of cssProp) {
                if (typeof cls !== 'string') {
                    isAllValidUtilities = false
                    break
                }

                const declaration = normalizeAliasDeclaration(cls)
                if (declaration) {
                    if (typeof CSS !== 'undefined' && !CSS.supports(declaration)) {
                        isAllValidUtilities = false
                        break
                    }
                    resolvedProps.push(declaration)
                    continue
                }

                isAllValidUtilities = false
                break
            }

            if (resolvedProps.length > 0 && isAllValidUtilities) {
                return resolvedProps.join(';')
            }
        }

        return null
    }

    function propToValue(p: string, v: string): string | null {
        // Step 0: Check config extensions
        let gvalue = propsValueExt(p + v)
        if (gvalue) return gvalue

        if (!p || v === undefined) return null

        // Step 1: Normalize Property Key
        let c = PropertiesCss[p]
        let propertyName = c ? c : p

        // Step 2: Analyze Value (Important, Arbitrary, Variable)
        let v0 = v[0]
        let i = false
        let vx = v

        // 2.1 Check Important (!)
        if (v0 === '!') {
            i = true
            vx = vx.substring(1)
            v0 = vx[0] // update first char
        }

        // 2.2 Normalize Value Key (Lowercase if alpha) 
        // Only if not arbitrary or variable
        // But arbitrary starts with [ or {
        if (vx.startsWith('--')) {
            vx = 'var(' + vx + ')'
        } else if (v0 === '[' && vx.endsWith(']')) {
            // Arbitrary Value: Strip brackets
            vx = vx.substring(1, vx.length - 1)
        } else {
            // Dictionary Value Lookup
            if (vx.length > 0) {
                // Try lowercasing the whole key for Dictionary Lookup.
                let lookupKey = vx[0].toLowerCase() + vx.substring(1)

                // Try 1: Standard (first char lower)
                let val = ValueExts[p]?.[lookupKey] || exts[lookupKey]

                // Try 2: Full Lowercase (e.g. SB -> sb)
                if (!val) {
                    let lowerKey = vx.toLowerCase()
                    val = ValueExts[p]?.[lowerKey] || exts[lowerKey]
                }

                vx = val || vx
            }
        }

        // Step 3: Replace Semicolon
        vx = vx.replace(/(';|;)/g, (val: string) => (val == "';" ? ';' : ' '))

        if (!vx) return null

        // Step 4: Construct CSS
        let vxx = vx + (i ? ' !important' : '')
        let cssProp = [propertyName + ':' + vxx]

        switch (propertyName) {
            case 'mx':
                cssProp = [`margin-left:${vxx}`, `margin-right:${vxx}`]
                break
            case 'my':
                cssProp = [`margin-top:${vxx}`, `margin-bottom:${vxx}`]
                break
            case 'px':
                cssProp = [`padding-left:${vxx}`, `padding-right:${vxx}`]
                break
            case 'py':
                cssProp = [`padding-top:${vxx}`, `padding-bottom:${vxx}`]
                break
            case 'bdx':
                cssProp = [`border-left:${vxx}`, `border-right:${vxx}`]
                break
            case 'bdy':
                cssProp = [`border-top:${vxx}`, `border-bottom:${vxx}`]
                break
        }

        const isBrowser = typeof CSS !== 'undefined'
        if (!isBrowser || cssProp.every((x) => CSS.supports(x))) {
            return cssProp.join(';')
        }

        return null
    }

    const splitSelectorSuffix = (input: string): { body: string, selector: string } => {
        let bracketDepth = 0
        for (let i = input.length - 1; i >= 0; i--) {
            const ch = input[i]
            if (ch === ']') {
                bracketDepth++
                continue
            }
            if (ch === '[') {
                if (bracketDepth > 0) bracketDepth--
                continue
            }
            if (ch === '@' && bracketDepth === 0) {
                return {
                    body: input.slice(0, i),
                    selector: input.slice(i + 1),
                }
            }
        }
        return { body: input, selector: '' }
    }

    const splitByAmpersandOutsideBrackets = (input: string): string[] => {
        const parts: string[] = []
        let start = 0
        let bracketDepth = 0

        for (let i = 0; i < input.length; i++) {
            const ch = input[i]
            if (ch === '[') {
                bracketDepth++
                continue
            }
            if (ch === ']') {
                if (bracketDepth > 0) bracketDepth--
                continue
            }
            if (ch === '&' && bracketDepth === 0) {
                parts.push(input.slice(start, i))
                start = i + 1
            }
        }

        parts.push(input.slice(start))
        return parts
    }

    const isLikelyValidSelectorFallback = (selector: string): boolean => {
        if (!selector) return true
        const text = selector.trim()
        if (!text) return true
        if (/[{}]/.test(text)) return false
        if (text === '#' || text === '(' || text === ')' || text === ',' || text === '>' || text === '+' || text === '~') return false
        if (text.startsWith('(') || text.startsWith(')')) return false

        let roundDepth = 0
        for (let i = 0; i < text.length; i++) {
            const ch = text[i]
            if (ch === '(') {
                roundDepth++
                continue
            }
            if (ch === ')') {
                if (roundDepth === 0) return false
                roundDepth--
            }
        }

        return roundDepth === 0
    }

    function classToProp(txtClass: string) {
        if (!shouldProcessClass(txtClass)) return null

        const parseTarget = prefix ? txtClass.slice(prefix.length) : txtClass
        const className = typeof CSS !== 'undefined' ? CSS.escape(txtClass) : escapeCssIdentifier(txtClass)

        // Support chained utilities: "md:dF&fxdC@;li", "dF&fk-fxdC@;li", "md:[grp1]&[grp2]@;li"
        if (parseTarget.includes('&') && !parseTarget.startsWith('&')) {
            const { body, selector } = splitSelectorSuffix(parseTarget)
            const segments = splitByAmpersandOutsideBrackets(body)
                .map((seg) => seg.trim())
                .filter((seg) => seg.length > 0)
                .map((seg) => (prefix && seg.startsWith(prefix) ? seg.slice(prefix.length) : seg))

            if (segments.length > 1) {
                let rootMedia = ''
                let rootLayer = ''
                const rootSelector = selector
                let hasRoot = false
                const cssPropItems: string[] = []

                for (const seg of segments) {
                    const segClass = rootSelector ? `${seg}@${rootSelector}` : seg
                    const parsedSeg = parseClassName(segClass)
                    if (!parsedSeg) return null
                    if (!isValidMediaKey(parsedSeg.mq)) return null
                    if (!parsedSeg.prop.startsWith('[') && !isKnownPropertyKey(parsedSeg.prop)) return null

                    if (!hasRoot) {
                        rootMedia = parsedSeg.mq || ''
                        rootLayer = parsedSeg.layer || ''
                        hasRoot = true
                    } else {
                        if (!parsedSeg.mq && rootMedia) parsedSeg.mq = rootMedia
                        if (!parsedSeg.layer && rootLayer) parsedSeg.layer = rootLayer
                    }

                    const segMedia = parsedSeg.mq || ''
                    const segLayer = parsedSeg.layer || ''
                    const segSelector = parsedSeg.selector || ''
                    if (segMedia !== rootMedia || segLayer !== rootLayer || segSelector !== rootSelector) {
                        return null
                    }

                    const valStr = propToValue(parsedSeg.prop, parsedSeg.val)
                    if (!valStr) return null
                    cssPropItems.push(valStr)
                }

                if (cssPropItems.length === 0) return null

                const selectorStr = rootSelector.replace(/(';|;)/g, (v: string) => (v == "';" ? ';' : ' '))
                const checkSupport = `selector(${className}${selectorStr})`
                if (selectorStr) {
                    if (typeof CSS !== 'undefined') {
                        if (!CSS.supports(checkSupport)) return null
                    } else if (!isLikelyValidSelectorFallback(selectorStr)) {
                        return null
                    }
                }

                return {
                    media: rootMedia || 'default',
                    layer: rootLayer || '0',
                    className,
                    property: cssPropItems.join(';'),
                    selector: selectorStr,
                    cssRules: `.${className}${selectorStr}{${cssPropItems.join(';')}}`,
                }
            }
        }

        const parsed = parseClassName(parseTarget)
        if (!parsed) return null
        if (!isValidMediaKey(parsed.mq)) return null
        if (!parsed.prop.startsWith('[') && !isKnownPropertyKey(parsed.prop)) return null

        let { mq: m = 'default', layer: l = '0', prop: p, val: v, selector: s = '' } = parsed
        const cssPropItems: string[] = []

        const valStr = propToValue(p, v)
        if (valStr) cssPropItems.push(valStr)

        if (cssPropItems.length === 0) return null

        const selectorStr = s.replace(/(';|;)/g, (v: string) => (v == "';" ? ';' : ' '))
        const checkSupport = `selector(${className}${selectorStr})`
        if (selectorStr) {
            if (typeof CSS !== 'undefined') {
                if (!CSS.supports(checkSupport)) return null
            } else if (!isLikelyValidSelectorFallback(selectorStr)) {
                return null
            }
        }

        return {
            media: m || 'default',
            layer: l || '0',
            className,
            property: cssPropItems.join(';'),
            selector: selectorStr,
            cssRules: `.${className}${selectorStr}{${cssPropItems.join(';')}}`,
        }
    }

    // polyfill for CSS.escape in node
    const escapeCssIdentifier = (str: string) => {
        // Basic escape for Node environment
        return str.replace(/([^\w-])/g, '\\$1');
    }

    const getClassAttrs = (el: Element): string[] => {
        var clsRoot = [...(el?.classList || [])].filter((f) => {
            if (f) {
                let c = f.charCodeAt(0) == 45 ? f.charCodeAt(1) : f.charCodeAt(0)
                return (c >= 97 && c <= 122) || (c >= 48 && c <= 57)
            }
            return false
        })

        if (el?.children?.length > 0) {
            Array.from(el?.children).forEach((itm) => {
                clsRoot.push(...getClassAttrs(itm))
            })
        }
        return clsRoot.flat(Infinity) as string[]
    }

    const observeDom = (dom: Document | Element | ShadowRoot, cb: (items: string[]) => void) => {
        if (typeof cb != 'function') {
            throw new Error('Callback is not a function')
        }
        if (!dom) return
        let docx: Element | ShadowRoot | undefined = undefined

        // Type guards
        if ('documentElement' in dom) {
            docx = dom.documentElement
        } else if (dom instanceof Element || ('tagName' in dom)) { // Basic check for Element
            docx = dom as Element
        } else if ('host' in dom) { // Basic check for ShadowRoot
            docx = dom as ShadowRoot
        }

        if (!docx) return

        if (docx instanceof Element) {
            cb(getClassAttrs(docx))
        }

        // Tạo MutationObserver để theo dõi thay đổi class
        if (typeof MutationObserver !== 'undefined') {
            new MutationObserver((mutationList) => {
                for (const mutation of mutationList) {
                    if (
                        mutation.type == 'attributes' &&
                        mutation.attributeName == 'class'
                    ) {
                        if (mutation.target.nodeType == 1) {
                            let className = String((mutation.target as Element)?.className ?? '')
                            let oldValue = String(mutation?.oldValue ?? '')

                            if (className || oldValue) {
                                let vClass = className
                                    .split(' ')
                                    .map((m) => m.trim())
                                    .filter((f) => f)
                                let vClassOld = oldValue
                                    .split(' ')
                                    .map((m) => m.trim())
                                    .filter((f) => f)
                                vClass = vClass.filter((f) => !vClassOld.includes(f))

                                typeof cb == 'function' && cb([...new Set(vClass)])
                            }
                        }
                    } else {
                        if (mutation.type == 'childList' && mutation.addedNodes.length > 0) {
                            let vClass = [...mutation.addedNodes]
                                .filter((f) => f.nodeType == 1)
                                .map((m) => getClassAttrs(m as Element))
                                .flat(Infinity) as string[]

                            typeof cb == 'function' && cb([...new Set(vClass)])
                        }
                    }
                }
            }).observe(docx, {
                attributes: true,
                attributeOldValue: true,
                attributeFilter: ['class'],
                childList: true,
                subtree: true,
            })
        }
    }

    // API công khai để xuất cache cho build thủ công
    const exportCache = () => {
        if (typeof window === 'undefined' || !window.localStorage) return lastKnownCacheData
        const data = parseCacheDataSync(window.localStorage.getItem(cacheKey))
        return data || lastKnownCacheData
    }

    return { buildCss, exportCache, ready: dictionaryReadyPromise }
}

export const cssObserve = (dom: Document | Element | ShadowRoot, options?: XCSSConfig) => {
    xcss(options).buildCss(dom).observe()
}

export const cssClsx = (dom: Document | Element | ShadowRoot, options?: XCSSConfig) => {
    return xcss(options).buildCss(dom).clsx
}

export default { css: xcss, cssObserve, clsx: cssClsx }
