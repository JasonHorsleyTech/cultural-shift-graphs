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
        graphable: resolve(root, 'graphable/index.html'),
        disneyConflictTypes: resolve(root, 'graphable/disney-conflict-types/index.html'),
        serviceCostMarkup: resolve(root, 'graphable/service-cost-markup/index.html'),
        grandpasEggs: resolve(root, 'graphable/grandpas-eggs/index.html'),
        americanCulturalDominance: resolve(root, 'graphable/american-cultural-dominance/index.html'),
        displacedProfessions: resolve(root, 'graphable/displaced-professions/index.html'),
        apocalypticPopulationDropoff: resolve(root, 'graphable/apocalyptic-population-dropoff/index.html'),
        communicationSpamLifecycle: resolve(root, 'graphable/communication-spam-lifecycle/index.html'),
        howSorryYouFeel: resolve(root, 'graphable/how-sorry-you-feel/index.html'),
      },
    },
  },
})
