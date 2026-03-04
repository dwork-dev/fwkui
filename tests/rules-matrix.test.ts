import { describe, expect, it } from 'vitest'
import { xcss } from '../src/core'

const isHashedClass = (value: string) => /^D[A-Z0-9]+$/.test(value)

describe('xcss rule matrix', () => {
    it('should support shorthand and full property forms', async () => {
        const instance = xcss()
        const { clsx, getCssString } = instance.buildCss()

        expect(isHashedClass(clsx('m10px'))).toBe(true)
        expect(isHashedClass(clsx('cRed'))).toBe(true)
        expect(isHashedClass(clsx('colorRed'))).toBe(true)
        expect(isHashedClass(clsx('margin-top-10px'))).toBe(true)

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain('margin:10px')
        expect(css).toContain('color:Red')
        expect(css).toContain('margin-top:-10px')
    })

    it('should support valid selector suffixes and reject invalid ones in fallback mode', async () => {
        const instance = xcss()
        const { clsx, getCssString } = instance.buildCss()

        expect(isHashedClass(clsx('dF@:hover'))).toBe(true)
        expect(isHashedClass(clsx('colorRed@#abc:hover'))).toBe(true)
        expect(clsx('dF@)')).toBe('dF@)')
        expect(clsx('dF@(')).toBe('dF@(')
        expect(clsx('dF@#')).toBe('dF@#')

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain(':hover{display:flex}')
        expect(css).toContain('#abc:hover{color:Red}')
        expect(css).not.toContain('){display:flex}')
        expect(css).not.toContain('({display:flex}')
        expect(css).not.toContain('#{display:flex}')
    })

    it('should support arbitrary, variable, and important values', async () => {
        const instance = xcss()
        const { clsx, getCssString } = instance.buildCss()

        expect(isHashedClass(clsx('w[calc(100%;-;var(--x:y))]'))).toBe(true)
        expect(isHashedClass(clsx('bgc--brand'))).toBe(true)
        expect(isHashedClass(clsx('c!#0a64e8'))).toBe(true)

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain('width:calc(100% - var(--x:y))')
        expect(css).toContain('background-color:var(--brand)')
        expect(css).toContain('color:#0a64e8 !important')
    })

    it('should keep malformed classes raw', async () => {
        const instance = xcss()
        const { clsx, getCssString } = instance.buildCss()

        expect(clsx('&span')).toBe('&span')
        expect(clsx('w[calc(100%;-;10px)')).toBe('w[calc(100%;-;10px)')
        expect(clsx('w]10')).toBe('w]10')
        expect(clsx('mdx:w10px')).toBe('mdx:w10px')
        expect(isHashedClass(clsx('m10px'))).toBe(true)

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain('margin:10px')
        expect(css).not.toContain('&:span')
        expect(css).not.toContain('undefined@layer')
    })

    it('should support media keys and reject unknown media keys', async () => {
        const instance = xcss({
            breakpoints: [{ tablet: 'screen and (min-width: 900px)' }],
        })
        const { clsx, getCssString } = instance.buildCss()

        expect(isHashedClass(clsx('md:m10px'))).toBe(true)
        expect(isHashedClass(clsx('tablet:colorRed'))).toBe(true)
        expect(clsx('phone:m10px')).toBe('phone:m10px')

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain('@media screen and (min-width: 768px)')
        expect(css).toContain('@media screen and (min-width: 900px)')
        expect(css).not.toContain('undefined@layer')
    })

    it('should apply prefix and keep non-prefixed tokens raw', async () => {
        const instance = xcss({ prefix: 'fk-' })
        const { clsx, getCssString } = instance.buildCss()

        expect(isHashedClass(clsx('fk-m10px'))).toBe(true)
        expect(isHashedClass(clsx('fk-colorRed'))).toBe(true)
        expect(clsx('m10px')).toBe('m10px')
        expect(clsx('fk-mdx:w10px')).toBe('fk-mdx:w10px')

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain('margin:10px')
        expect(css).toContain('color:Red')
        expect(css).not.toContain('width:10px')
    })

    it('should exclude classes by wildcard and prefix', async () => {
        const instance = xcss({
            excludes: ['legacy-*'],
            excludePrefixes: ['bs-'],
        })
        const { clsx, getCssString } = instance.buildCss()

        expect(clsx('legacy-btn')).toBe('legacy-btn')
        expect(clsx('bs-card')).toBe('bs-card')
        expect(isHashedClass(clsx('m10px'))).toBe(true)

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain('margin:10px')
        expect(css).not.toContain('legacy-btn')
        expect(css).not.toContain('bs-card')
    })

    it('should accept aliases only when all alias entries are full declarations', async () => {
        const instance = xcss({
            aliases: {
                row: ['display:flex', 'padding:5px'],
                col: ['flex-direction: column', 'margin:5px'],
                bad: ['dF'],
            },
        })
        const { clsx, getCssString } = instance.buildCss()

        expect(isHashedClass(clsx('[row]'))).toBe(true)
        expect(isHashedClass(clsx('md:[row]&[col]@;li'))).toBe(true)
        expect(clsx('[bad]')).toBe('[bad]')

        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        expect(css).toContain('display:flex')
        expect(css).toContain('padding:5px')
        expect(css).toContain('flex-direction:column')
        expect(css).toContain('margin:5px')
    })

    it('should keep unknown property raw when dictionary is enabled', async () => {
        const instance = xcss()
        await instance.ready
        await Promise.resolve()

        const { clsx, getCssString } = instance.buildCss()
        expect(clsx('unknown10')).toBe('unknown10')
        expect(isHashedClass(clsx('m10px'))).toBe(true)

        const css = getCssString()
        expect(css).toContain('margin:10px')
        expect(css).not.toContain('unknown:10')
    })

    it('should allow unknown property when dictionary is disabled', () => {
        const { clsx, getCssString } = xcss({ dictionaryImport: false }).buildCss()
        expect(isHashedClass(clsx('unknown10'))).toBe(true)
        expect(getCssString()).toContain('unknown:10')
    })
})
