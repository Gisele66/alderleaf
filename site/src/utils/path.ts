/** Prefix a site path for GitHub Pages (/alderleaf/) or local dev (/). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}
