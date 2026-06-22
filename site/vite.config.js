import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        quote: resolve(__dirname, 'quote.html'),
        services: resolve(__dirname, 'services.html'),
        removal: resolve(__dirname, 'removal.html'),
        brushing: resolve(__dirname, 'brushing-land-clearing.html'),
        pruning: resolve(__dirname, 'pruning.html'),
        chips: resolve(__dirname, 'chips.html'),
        lawnCare: resolve(__dirname, 'lawn-care.html'),
        propertyMaintenance: resolve(__dirname, 'property-maintenance.html'),
      },
    },
  },
})
