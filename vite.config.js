import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages' // Изменённый импорт

export default defineConfig({
  plugins: [
    react(),
    ghPages({
      branch: 'gh-pages',
      dotfiles: true
    })
  ],
  base: '/my-portfolio/'
})