import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    // Three.js is isolated in a lazy scene chunk; its gzip size remains ~236 kB.
    chunkSizeWarningLimit: 900,
  },
})
