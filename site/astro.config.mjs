import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  site: isGitHubPages ? 'https://gisele66.github.io' : 'https://alderleaf.ca',
  base: isGitHubPages ? '/alderleaf/' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
})
