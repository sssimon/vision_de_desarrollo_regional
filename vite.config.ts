import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` debe coincidir con el nombre del repo para que GitHub Pages
// (https://sssimon.github.io/vision_de_desarrollo_regional/) cargue bien los assets.
export default defineConfig({
  base: '/vision_de_desarrollo_regional/',
  plugins: [react()],
})
