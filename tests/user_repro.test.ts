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
})
