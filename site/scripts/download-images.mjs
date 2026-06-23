/**
 * One-time / occasional script: download client media into public/images/
 * so the site serves assets from the same origin (no WordPress CDN dependency).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, '..')
const outDir = path.join(siteRoot, 'public', 'images')

const URLS = [
  'https://alderleaf.ca/wp-content/uploads/2023/08/Color-logo-no-background.png',
  'https://alderleaf.ca/wp-content/uploads/2023/07/Artboard-1@2x.png',
  'https://alderleaf.ca/wp-content/uploads/2023/07/tree_removal-1.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/09/lawn-sprinklers.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/favicon-1.png',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Truck-pic-rear-2.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Lawn-Care-2.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/alderleaf.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/About-Us-Pic.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Signature-3.png',
  'https://alderleaf.ca/wp-content/uploads/2024/10/20220709_090309.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Land-Clearing.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Tree-Removal-2.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Woodchipping.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Lawn-Care.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/10/Property-maintenance2.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/IMG_2003.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/20240430_162038.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/IMG_5866.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/IMG_5803.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/20220630_114805.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/IMG_1966.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/20221006_093805.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/20220422_095109.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/20220424_102637.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/IMG_1955.jpg',
  'https://alderleaf.ca/wp-content/uploads/2024/11/20220424_102807.jpg',
]

fs.mkdirSync(outDir, { recursive: true })

for (const url of URLS) {
  const filename = path.basename(new URL(url).pathname)
  const dest = path.join(outDir, filename)
  if (fs.existsSync(dest)) {
    console.log(`skip ${filename}`)
    continue
  }
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(dest, buf)
  console.log(`saved ${filename}`)
}

console.log('done')
