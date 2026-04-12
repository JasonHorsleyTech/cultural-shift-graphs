import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        disneyVillains: resolve(root, 'disney-villains/index.html'),
        usPopulation: resolve(root, 'us-population/index.html'),
        disneyConflictTypes: resolve(root, 'disney-conflict-types/index.html'),
      },
    },
  },
})
