import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            provider: 'v8',
            include: ['src/**'],
            exclude: ['src/index-auto.ts', 'src/types.ts', '**/*.d.ts'],
            reporter: ['text', 'json', 'html'],
        },
    },
})
