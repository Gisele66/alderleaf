import fs from 'fs'

const file = process.argv[2]
const html = fs.readFileSync(file, 'utf8')
const post = html.match(/<div class="post-content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/)[1]
const blocks = [...post.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/g)]
for (const [, heading, body] of blocks) {
  const h = heading.replace(/<[^>]+>/g, '').trim()
  const paras = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)]
    .map((m) =>
      m[1]
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#8211;/g, '-')
        .replace(/&amp;/g, '&')
        .trim(),
    )
    .filter((p) => p.length > 3 && !p.startsWith('Lorem ipsum'))
  if (h) console.log('##', h)
  paras.forEach((p) => console.log(p))
  console.log('---')
}
