import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// This repo is a GitHub *user/org* Pages site (ganesh-2134.github.io), which is
// served from the domain root — so base stays "/". If this were ever moved to
// a project page (username.github.io/repo-name), base would need to become
// "/repo-name/" instead.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
