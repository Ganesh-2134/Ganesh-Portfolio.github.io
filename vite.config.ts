import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub serves this repository as a project site under the repository name.
export default defineConfig({
  base: '/Ganesh-Portfolio.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
