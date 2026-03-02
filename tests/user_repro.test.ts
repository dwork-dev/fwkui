import { describe, it, expect } from 'vitest'
import { xcss } from '../src/core'

describe('xcss user repro', () => {
    it('should handle fk-dF@;li', async () => {
        const instance = xcss({ prefix: 'fk-' })
        const { clsx, getCssString } = instance.buildCss()
        const res = clsx('fk-dF@;li')
        console.log('Result 1:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)
        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        console.log('CSS 1:', css)
        // dF -> display: flex. @;li -> " li" selector
        expect(css).toContain('display:flex')
        expect(css).toContain(' li{')
    })

    it('should handle fk-fxdC@;li', async () => {
        const instance = xcss({ prefix: 'fk-' })
        const { clsx, getCssString } = instance.buildCss()
        const res = clsx('fk-fxdC@;li')
        console.log('Result 2:', res)
        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        console.log('CSS 2:', css)
        // fxdC -> flex-direction: column
        expect(css).toContain('flex-direction:column')
        expect(css).toContain(' li{')
    })

    it('should handle fk-dF&fk-fxdC@;li', async () => {
        const instance = xcss({ prefix: 'fk-' })
        const { clsx, getCssString } = instance.buildCss()
        const res = clsx('fk-dF&fk-fxdC@;li')
        console.log('Result 3:', res)
        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        console.log('CSS 3:', css)
        // This is the chained/complex case.
        // We expect it might produce invalid CSS 'display:F&fk-fxdC' 
        // OR nothing if validation fails.
    })

    it('should handle css variable value fk-bgc--red', async () => {
        const instance = xcss({ prefix: 'fk-' })
        const { clsx, getCssString } = instance.buildCss()
        const res = clsx('fk-bgc--red')
        console.log('Result 4:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)
        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        console.log('CSS 4:', css)
        expect(css).toContain('background-color:var(--red)')
    })

    it('should handle arbitrary value brackets w[calc(100%;-;10px)]', async () => {
        const instance = xcss()
        const { clsx, getCssString } = instance.buildCss()
        const res = clsx('w[calc(100%;-;10px)]')
        console.log('Result 5:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)
        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        console.log('CSS 5:', css)
        expect(css).toContain('width:calc(100% - 10px)')
    })

    it('should handle important + hex value c!#0a64e8', async () => {
        const instance = xcss()
        const { clsx, getCssString } = instance.buildCss()
        const res = clsx('c!#0a64e8')
        console.log('Result 6:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)
        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        console.log('CSS 6:', css)
        expect(css).toContain('color:#0a64e8 !important')
    })

    it('should keep invalid token as raw class (bs-a) and still parse valid token', async () => {
        const instance = xcss()
        const { clsx, getCssString } = instance.buildCss()
        const res = clsx('bs-a', 'abcde', 'm10px')
        console.log('Result 7:', res)

        const parts = res.split(' ')
        expect(parts).toContain('bs-a')
        expect(parts).toContain('abcde')
        expect(parts.some((p) => /^D[A-Z0-9]+$/.test(p))).toBe(true)
        await instance.ready
        await Promise.resolve()

        const css = getCssString()
        console.log('CSS 7:', css)
        expect(css).toContain('margin:10px')
        expect(css).not.toContain('bs-a')
        expect(css).not.toContain('abcde')
    })
})
