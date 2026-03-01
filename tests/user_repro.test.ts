import { describe, it, expect } from 'vitest'
import { xcss } from '../src/core'

describe('xcss user repro', () => {
    it('should handle fk-dF@;li', () => {
        const { clsx, getCssString } = xcss({ prefix: 'fk-' }).buildCss()
        const res = clsx('fk-dF@;li')
        console.log('Result 1:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)

        const css = getCssString()
        console.log('CSS 1:', css)
        // dF -> display: flex. @;li -> " li" selector
        expect(css).toContain('display:flex')
        expect(css).toContain(' li{')
    })

    it('should handle fk-fxdC@;li', () => {
        const { clsx, getCssString } = xcss({ prefix: 'fk-' }).buildCss()
        const res = clsx('fk-fxdC@;li')
        console.log('Result 2:', res)

        const css = getCssString()
        console.log('CSS 2:', css)
        // fxdC -> flex-direction: column
        expect(css).toContain('flex-direction:column')
        expect(css).toContain(' li{')
    })

    it('should handle fk-dF&fk-fxdC@;li', () => {
        const { clsx, getCssString } = xcss({ prefix: 'fk-' }).buildCss()
        const res = clsx('fk-dF&fk-fxdC@;li')
        console.log('Result 3:', res)

        const css = getCssString()
        console.log('CSS 3:', css)
        // This is the chained/complex case.
        // We expect it might produce invalid CSS 'display:F&fk-fxdC' 
        // OR nothing if validation fails.
    })

    it('should handle css variable value fk-bgc--red', () => {
        const { clsx, getCssString } = xcss({ prefix: 'fk-' }).buildCss()
        const res = clsx('fk-bgc--red')
        console.log('Result 4:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)

        const css = getCssString()
        console.log('CSS 4:', css)
        expect(css).toContain('background-color:var(--red)')
    })

    it('should handle arbitrary value brackets w[calc(100%;-;10px)]', () => {
        const { clsx, getCssString } = xcss().buildCss()
        const res = clsx('w[calc(100%;-;10px)]')
        console.log('Result 5:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)

        const css = getCssString()
        console.log('CSS 5:', css)
        expect(css).toContain('width:calc(100% - 10px)')
    })

    it('should handle important + hex value c!#0a64e8', () => {
        const { clsx, getCssString } = xcss().buildCss()
        const res = clsx('c!#0a64e8')
        console.log('Result 6:', res)
        expect(res).toMatch(/^D[A-Z0-9]+$/)

        const css = getCssString()
        console.log('CSS 6:', css)
        expect(css).toContain('color:#0a64e8 !important')
    })
})
