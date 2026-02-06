import { mitt } from './events'


export type XCSSConfig = {
    base?: string
    aliases?: Record<string, string[]>
    exclude?: string[]
    breakpoints?: Record<string, string>[]
    theme?: Record<string, string>
    prefix?: string
}

type CssPropertyMap = Record<string, string>
type CssValueMap = Record<string, Record<string, string>>

import { parseClassName } from './parser'

const setupCssLayers = (docRoot: Document | ShadowRoot | null, id?: string) => {
    if (!docRoot || typeof document === 'undefined') return
    id = id || 'fwkui'

    // Tạo danh sách các layer
    const layers = Array.from({ length: 24 }, (_, i) => {
        return 'l' + i
    })

    // Check if style exists
    // If it exists but we cleared it (because cache mismatch), treat as if it doesn't exist?
    // Actually, logic below handles creation.
    // If we want to reuse existing style (e.g. bootloader's which we decided to REMOVE in buildCss),
    // then this logic is fine as it creates a fresh one.
    // If we kept bootloader style, we would need to modify this.
    // Since we decided to REMOVE bootloader style in buildCss, this function will naturally create a new property structure.
    // This is safer.

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
    const str = JSON.stringify({
        base: config.base || '',
        aliases: config.aliases || {},
        breakpoints: config.breakpoints || [],
        theme: config.theme || {},
        prefix: config.prefix || '',
        exclude: config.exclude || []
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
    configHash: string;
    cssText: Record<string, string>;
    rulesSet: Record<string, string[]>;
    keys: [string, string][];
}

/**
 * Hàm factory chính để khởi tạo và cấu hình engine xcss.
 */
import { SHORT_PROPERTIES, COMMON_VALUES, SPECIFIC_VALUES } from './dictionary'

const CACHE_KEY = 'xcss_cache_v1'

/**
 * Hàm factory chính để khởi tạo và cấu hình engine xcss.
 */
export const xcss = (
    modules: XCSSConfig = {
        base: '',
        aliases: {},
        exclude: [],
        breakpoints: [],
        theme: {},
        prefix: '',
    },
) => {
    // OLD: LZW parsing Logic removed
    // let CSS_PV: string[] = []
    // try {
    //     CSS_PV = JSON.parse(decompressLZW(cssText))
    // } catch (e) { ... }

    // Use dictionary directly
    let PropertiesCss: CssPropertyMap = SHORT_PROPERTIES
    let ValueExts: CssValueMap = SPECIFIC_VALUES

    let {
        base: cssDefault = null,
        breakpoints: mediaQuery = [],
        aliases: groupValues = {},
        theme: valueExt = {},
        exclude: exNames = [],
        prefix = '',
    } = modules || {}

    if (!Array.isArray(mediaQuery)) mediaQuery = []
    if (!Array.isArray(exNames)) exNames = []
    if (!groupValues || typeof groupValues !== 'object') groupValues = {}
    if (!valueExt || typeof valueExt !== 'object') valueExt = {}

    // Combine default extensions with COMMON_VALUES and config valueExt
    var exts: Record<string, string> = {
        ...COMMON_VALUES,
        ...valueExt,
    }

    // Helper to get property specific map if needed
    const getValueMap = (prop: string) => {
        return ValueExts[prop] || {}
    }



    const buildCss = (doc: Document | ShadowRoot | Element | undefined = typeof document !== 'undefined' ? document : undefined) => {
        // If running in non-browser environment without a doc, we can still simulate for extraction
        const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'
        let docRoot: Document | ShadowRoot | null = null

        if (doc) {
            docRoot = 'getRootNode' in doc ? (doc.getRootNode() as Document | ShadowRoot) : (doc as any)
        }

        const CSS_KEYS = new Map<string, string>()

        // Setup layers if in browser
        if (isBrowser && docRoot) {
            setupCssLayers(docRoot)
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
        let cacheLoaded = false

        const saveCache = (data: XCSSCacheData) => {
            if (!isBrowser || !window.localStorage) return
            try {
                localStorage.setItem(CACHE_KEY, JSON.stringify(data))
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
                    keys: Array.from(CSS_KEYS.entries())
                }
                saveCache(data)
            }, 1000)
        }

        // Load Cache Logic (Sync)
        if (isBrowser && window.localStorage) {
            try {
                const raw = localStorage.getItem(CACHE_KEY)
                if (raw) {
                    const data = JSON.parse(raw) as XCSSCacheData
                    if (data && data.configHash === currentConfigHash) {
                        // Restore Keys
                        if (data.keys) {
                            data.keys.forEach(([k, v]) => CSS_KEYS.set(k, v))
                        }
                        // Restore Text (Unwrap for internal use)
                        if (data.cssText) {
                            for (const k in data.cssText) {
                                let txt = data.cssText[k]
                                if (k !== 'root') {
                                    const match = /@media[^{]+\{\n?([\s\S]+)\n?\}/.exec(txt)
                                    if (match && match[1]) {
                                        cssStyleSheetsText[k] = match[1].trim()
                                    } else {
                                        cssStyleSheetsText[k] = txt
                                    }
                                } else {
                                    cssStyleSheetsText[k] = txt
                                }
                            }
                        }

                        // We do NOT restore rulesSet here because we need to initialize Sets in loop below first.
                        // We will populate them after generic init.
                        cacheLoaded = true
                    } else {
                        localStorage.removeItem(CACHE_KEY)
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

        // Post-Init Hydration: Populate Sets
        if (cacheLoaded && isBrowser && window.localStorage) {
            // Re-read or just assume consistent if we had rulesSet in memory earlier?
            // Since we didn't save `data` variable to outer scope, we need to read again or move `data` up.
            // Optimize: Read once.
            const raw = localStorage.getItem(CACHE_KEY)
            if (raw) {
                const data = JSON.parse(raw) as XCSSCacheData
                if (data.rulesSet) {
                    for (const k in data.rulesSet) {
                        // Ensure set exists (it was created in loop above)
                        if (cssStyleSheetsSet[k]) {
                            // Add all rules
                            data.rulesSet[k].forEach(r => cssStyleSheetsSet[k].add(r))
                        }
                    }
                }
            }

            // Cleanup Bootloader Style if it exists
            // logic: Bootloader (style#fwkui) + Lib (Adopted Sheets) = Duplicate.
            // Remove Bootloader style to let Adopted Sheets take over.
            // NOTE: 'setupCssLayers' not yet called.
            if (docRoot) {
                const blStyle = docRoot.querySelector('style[id="fwkui"]')
                if (blStyle) {
                    blStyle.remove()
                }
            }
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

        emitter.on('observeDom' as any, (items: string[]) => {
            if (items.length > 0) {
                items.forEach((cls) => {
                    let item = classToProp(cls)
                    item && updateRules(cls, item)
                })
            }
        })

        const clsx = (...clsArrs: any[]) => {
            let lsCss = clsArrs
                .map((m) => (Array.isArray(m) ? m : [m]))
                .flat(Infinity)
                .map((m) => (typeof m === 'string' ? m.split(/(\s|\t)+/g) : []))
                .flat(Infinity) as string[]

            lsCss = lsCss.filter((m) => typeof m === 'string' && m.trim())

            lsCss = [...new Set(lsCss)]

            let lsClassNew = lsCss.map((l: string) => {
                let item = l
                if (CSS_KEYS.has(l)) {
                    item = CSS_KEYS.get(l)!
                } else {
                    const isMatch = !prefix || l.startsWith(prefix)
                    const parseTarget = isMatch && prefix ? l.slice(prefix.length) : l

                    if (isMatch && parseClassName(parseTarget)) {

                        let key = 'D' + CSS_KEYS.size.toString(32).toUpperCase()
                        CSS_KEYS.set(l, key)
                        item = key
                        triggerSave() // TRIGGER SAVE CACHE
                    }
                }
                // console.log("item", item);
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
                if (items.length > 0) {
                    items.forEach((cls) => {
                        let item = classToProp(cls)
                        item && updateRules(cls, item)
                    })
                }
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

            // Try to resolve as utility classes first
            let resolvedProps: string[] = []
            let isAllValidUtilities = true

            // To avoid infinite recursion, we might need depth control, but simple mutual recursion 
            // works if there are no cycles.
            for (const cls of cssProp) {
                const res = classToProp(cls)
                if (res && res.property) {
                    resolvedProps.push(res.property)
                } else if (typeof CSS !== 'undefined' && CSS.supports(cls)) {
                    resolvedProps.push(cls)
                } else {
                    // If strict check fails, we might still include it if node env?
                    // Similar to original logic:
                    if (typeof CSS === 'undefined') {
                        resolvedProps.push(cls)
                    } else {
                        isAllValidUtilities = false
                    }
                }
            }

            if (resolvedProps.length > 0 && (typeof CSS === 'undefined' || isAllValidUtilities)) {
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

    function classToProp(txtClass: string) {
        if (prefix && !txtClass.startsWith(prefix)) return null

        let checkEx =
            exNames.length > 0 &&
            exNames.every((e) =>
                e.includes('*')
                    ? new RegExp('^' + e.replace(/\*/g, '.+') + '$').test(txtClass)
                    : e == txtClass,
            )
        if (checkEx) return null

        const parseTarget = prefix ? txtClass.slice(prefix.length) : txtClass
        const parsed = parseClassName(parseTarget)
        if (!parsed) return null

        let { mq: m = 'default', layer: l = '0', prop: p, val: v, selector: s = '' } = parsed

        // Construct properties string. 
        // If prop='&', it mimics old behavior where multiple props could be chained with &.
        // But in new parser, prop is single unless we handle logic differently.
        // Old regex split p by &. New parser handles single P:V
        // Wait, does old syntax allow `m10px&p20px`?
        // Old regex `(& ...)?` group 2 allows chaining? 
        // Logic `p.split('&')` suggests chaining is supported.
        // New parser stops at first prop. 
        // If we want to support chaining `prop1val1&prop2val2`, the parser needs to be loop based or recursive.
        // However, standard utility usage usually one class one prop.
        // Chaining `&` in class name is rare and bad practice?
        // Let's assume P:V is single for now based on Implementation Plan.

        // Reconstruct "Property + Value" string for propToValue
        // let pvString = p + v // Deprecated: No longer need concatenated string
        let cssPropItems: string[] = []

        let valStr = propToValue(p, v)
        if (valStr) cssPropItems.push(valStr)

        if (cssPropItems.length == 0) return null

        let selectorStr = s.replace(/(';|;)/g, (v: string) => (v == "';" ? ';' : ' '))
        let className = typeof CSS !== 'undefined' ? CSS.escape(txtClass) : escapeCssIdentifier(txtClass)

        let checkSupport = `selector(${className}${selectorStr})`
        if (typeof CSS !== 'undefined' && selectorStr && !CSS.supports(checkSupport)) {
            return null
        }

        /* 
        Old logic used `p.split('&')`. If we need chaining support, we should parse the rest?
        But typical usage is single atomic class.
        */

        let objrs = {
            media: m || 'default', // parser returns empty string if no mq
            layer: l || '0',
            className: className,
            property: cssPropItems.join(';'),
            selector: selectorStr,
            cssRules: `.${className}${selectorStr}{${cssPropItems.join(';')}}`,
        }
        return objrs
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

    // Public API to export cache for manual build
    const exportCache = () => {
        if (typeof localStorage === 'undefined') return null
        return JSON.parse(localStorage.getItem(CACHE_KEY) || 'null')
    }

    return { buildCss, exportCache }
}

export const cssObserve = (dom: Document | Element | ShadowRoot, options?: XCSSConfig) => {
    xcss(options).buildCss(dom).observe()
}

export const cssClsx = (dom: Document | Element | ShadowRoot, options?: XCSSConfig) => {
    return xcss(options).buildCss(dom).clsx
}

export default { css: xcss, cssObserve, clsx: cssClsx }
