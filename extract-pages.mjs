import fs from 'fs'

const files = fs.readdirSync('.').filter((f) => f.startsWith('alderleaf-') && f.endsWith('.html'))

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8')
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1] || ''
  const desc = (html.match(/name="description" content="([^"]+)"/) || [])[1] || ''
  const post = html.match(/<div class="post-content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/)
  if (!post) {
    console.log('===', file, 'NO POST')
    continue
  }
  const chunk = post[1]
  const headings = [...chunk.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(Boolean)
  const paras = [...chunk.matchAll(/<p>([\s\S]*?)<\/p>/g)]
    .map((m) =>
      m[1]
        .replace(/<[^>]+>/g, '')
        .replace(/&#8211;/g, '-')
        .replace(/&#038;/g, '&')
        .replace(/&amp;/g, '&')
        .trim(),
    )
    .filter((t) => t.length > 15)
  const imgs = [
    ...new Set(
      [...chunk.matchAll(/https:\/\/alderleaf\.ca\/wp-content\/uploads\/[^"'\s]+/g)].map((m) =>
        m[0].split('?')[0],
      ),
    ),
  ]
  console.log('\n===', file, '===')
  console.log('TITLE:', title)
  if (desc) console.log('DESC:', desc.slice(0, 200))
  console.log('HEADINGS:', headings.join(' | '))
  console.log('PARAS:\n' + paras.join('\n---\n'))
  console.log('IMGS:\n' + imgs.join('\n'))
}
