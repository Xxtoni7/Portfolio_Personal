import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/Portfolio_Personal/'
    : '/',
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        const isIgnoredRadixDirective =
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.id?.includes('node_modules') &&
          warning.message.includes('"use client"')

        if (isIgnoredRadixDirective) return

        warn(warning)
      },
    },
  },
})
