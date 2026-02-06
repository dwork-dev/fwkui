import $$ from './core'
import { XCSSConfig } from './core'

const GLOBAL_KEY = '__FWXCSS_SHARED__'

interface CssInit {
    clsx: (...args: any[]) => string
    observe: () => void
    getCssString: () => string
}

const createSharedInstance = () => {
    const cssInitMap = new WeakMap<Document | ShadowRoot, CssInit>()
    // Also store a global instance for non-DOM usage or global fallback
    let globalInstance: CssInit | null = null;

    let currentCssRoot: Document | ShadowRoot | null = typeof document !== 'undefined' ? document : null

    const isCssRoot = (value: any): value is Document | ShadowRoot => {
        if (!value) return false
        const hasDocument = typeof Document !== 'undefined'
        const hasShadowRoot = typeof ShadowRoot !== 'undefined'
        const isDoc = hasDocument && value instanceof Document
        const isShadow = hasShadowRoot && value instanceof ShadowRoot
        return isDoc || isShadow
    }

    const getFallbackInit = (): CssInit => {
        // Create a standalone instance if not exists
        if (!globalInstance) {
            globalInstance = $$.css().buildCss(undefined)
        }
        return globalInstance
    }

    const createCssInit = (root: Document | ShadowRoot) => {
        // Default config with basic normalize
        return $$.css({
            base: `html,body{font-size:16px;padding:0;margin:0;}`
        }).buildCss(root)
    }

    const getCssInit = (root: Document | ShadowRoot | undefined | null): CssInit => {
        if (!root) return getFallbackInit()
        let cssInit = cssInitMap.get(root)
        if (!cssInit) {
            cssInit = createCssInit(root)
            cssInitMap.set(root, cssInit)
        }
        return cssInit
    }

    const setClsxRoot = (root: Document | ShadowRoot) => {
        currentCssRoot = root || (typeof document !== 'undefined' ? document : null)
    }

    const clsx = (...args: any[]): string => {
        let root: Document | ShadowRoot | undefined | null = undefined
        const last = args[args.length - 1]
        if (isCssRoot(last)) {
            root = last
            args = args.slice(0, -1)
        }

        const classes: string[] = []
        const push = (value: any) => {
            if (!value) return
            if (typeof value === 'string' || typeof value === 'number') {
                classes.push(String(value))
                return
            }
            if (Array.isArray(value)) {
                value.forEach(push)
                return
            }
            if (typeof value === 'object') {
                Object.keys(value).forEach((key) => {
                    if (value[key]) classes.push(key)
                })
            }
        }

        args.forEach(push)

        // Resolve helper
        // If explicit root provided, use it
        // If not, use currentCssRoot (e.g. document in browser)
        // If both null (e.g. Node env), use fallback global instance
        const resolvedRoot = root || currentCssRoot

        // Pass the combined class string to xcss engine
        return getCssInit(resolvedRoot).clsx(classes.join(' '))
    }

    // New API: Get the generated CSS string from the default/global instance
    // Useful for SSR
    const getCss = () => {
        return getFallbackInit().getCssString()
    }

    return { clsx, setClsxRoot, getCss }
}

const globalScope = typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : global) as any
const shared = globalScope[GLOBAL_KEY] || createSharedInstance()

if (!globalScope[GLOBAL_KEY]) {
    globalScope[GLOBAL_KEY] = shared
}

export const clsx = shared.clsx
export const setClsxRoot = shared.setClsxRoot
export const getCss = shared.getCss
export default $$
export type { XCSSConfig }
