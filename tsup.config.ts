import { defineConfig } from 'tsup'

export default defineConfig(() => ({
  entry: {
    index: './src/index.ts'
  },
  outDir: 'lib',
  format: ['esm'],
  target: 'esnext',
  ignoreWatch: ['**/lib/**'],
  splitting: false,
  sourcemap: false,
  minifyWhitespace: false,
  minifySyntax: false
}))
