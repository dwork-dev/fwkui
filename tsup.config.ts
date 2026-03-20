import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts', 'src/index-auto.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: true,
})
