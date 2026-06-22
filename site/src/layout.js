export const serviceLinks = [
  { href: '/removal.html', label: 'Tree Removal' },
  { href: '/brushing-land-clearing.html', label: 'Brushing / Land Clearing' },
  { href: '/pruning.html', label: 'Tree Pruning and Shrub Trimming' },
  { href: '/chips.html', label: 'Firewood, Wood-Chipping & Mulch' },
  { href: '/lawn-care.html', label: 'Lawn Care' },
  { href: '/property-maintenance.html', label: 'Property Maintenance' },
  { href: '/removal.html#assessment', label: 'Tree Assessments' },
]

const mainNav = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/services.html', label: 'Services', id: 'services' },
  { href: '/about.html', label: 'About Us', id: 'about' },
  { href: '/contact.html', label: 'Contact Us', id: 'contact' },
]

function navLinkClass(active, isServicesChild = false) {
  if (active) {
    return isServicesChild
      ? 'nav-dropdown-link nav-dropdown-link-active'
      : 'nav-link nav-link-active'
  }
  return isServicesChild ? 'nav-dropdown-link' : 'nav-link'
}

function isServicePage(page) {
  return serviceLinks.some((s) => {
    const slug = s.href.split('#')[0].replace(/^\//, '').replace(/\.html$/, '')
    return slug === page
  })
}

export function renderHeader(activePage) {
  const servicesActive = activePage === 'services' || isServicePage(activePage)

  const desktopNav = mainNav
    .map((item) => {
      if (item.id === 'services') {
        const childLinks = serviceLinks
          .map(
            (s) =>
              `<a href="${s.href}" class="${navLinkClass(isServicePage(activePage) && s.href.split('#')[0].replace(/^\//, '').replace(/\.html$/, '') === activePage, true)}">${s.label}</a>`,
          )
          .join('')
        return `
          <div class="group relative">
            <a href="/services.html" class="${navLinkClass(servicesActive)}">Services</a>
            <div class="invisible absolute left-0 top-full z-50 min-w-[16rem] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div class="rounded-xl border border-stone-200 bg-white py-2 shadow-lg">${childLinks}</div>
            </div>
          </div>`
      }
      return `<a href="${item.href}" class="${navLinkClass(activePage === item.id)}">${item.label}</a>`
    })
    .join('')

  const mobileServiceLinks = serviceLinks
    .map((s) => `<li><a href="${s.href}" class="block rounded-lg py-2 pl-6 pr-3 text-sm text-slate hover:bg-stone-50">${s.label}</a></li>`)
    .join('')

  const mobileNav = mainNav
    .map((item) => {
      const base = `<li><a href="${item.href}" class="block rounded-lg px-3 py-2.5 font-medium ${activePage === item.id ? 'text-forest bg-forest/5' : 'text-ink hover:bg-stone-50'}">${item.label}</a></li>`
      if (item.id === 'services') {
        return base + mobileServiceLinks
      }
      return base
    })
    .join('')

  return `
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-forest focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
    <header id="site-header" class="sticky top-0 z-40 bg-white shadow-[0_2px_16px_rgba(18,50,8,0.08)] transition-shadow">
      <div class="site-container site-header-grid">
        <a href="/" class="site-header-logo shrink-0" aria-label="Alderleaf home">
          <img src="https://alderleaf.ca/wp-content/uploads/2023/08/Color-logo-no-background.png" alt="Alderleaf" class="site-logo" width="250" height="85" />
        </a>
        <nav class="site-nav site-header-nav hidden items-center lg:flex" aria-label="Main navigation">${desktopNav}</nav>
        <div class="site-header-actions hidden shrink-0 lg:flex">
          <a href="/quote.html" class="btn-header-cta">Request A Quote</a>
        </div>
        <button id="menu-toggle" type="button" class="site-header-menu-btn inline-flex items-center justify-center rounded-lg p-3 text-ink lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle navigation">
          <svg id="menu-icon-open" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <svg id="menu-icon-close" class="hidden h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <nav id="mobile-menu" class="hidden border-t border-stone-200 bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">
        <ul class="flex flex-col gap-1">${mobileNav}
          <li class="pt-3"><a href="/quote.html" class="btn-header-cta block text-center">Request A Quote</a></li>
        </ul>
      </nav>
    </header>`
}

export function renderFooter() {
  return `
    <footer class="bg-forest-dark text-white">
      <div class="site-container py-14">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src="https://alderleaf.ca/wp-content/uploads/2023/07/Artboard-1@2x.png" alt="Alderleaf" class="h-14 w-auto brightness-0 invert" width="200" height="58" />
            <p class="mt-4 pl-2 italic text-forest-light"><strong>"When experience matters!"</strong></p>
          </div>
          <div>
            <h4 class="font-serif text-lg font-bold text-white">Contact Details</h4>
            <ul class="mt-4 space-y-2 text-white/85">
              <li><a href="tel:12505578733" class="hover:text-white">1-250-557-TREE (8733)</a></li>
              <li><a href="tel:12508580525" class="hover:text-white">250-858-0525 (Cell)</a></li>
              <li><a href="mailto:office@alderleaf.ca" class="hover:text-white">office@alderleaf.ca</a></li>
              <li>Box 163, Port Clements, BC, V0T-1R0</li>
            </ul>
          </div>
          <div>
            <h4 class="font-serif text-lg font-bold text-white">Company</h4>
            <ul class="mt-4 space-y-2 text-white/85">
              <li><a href="/" class="hover:text-white">Home</a></li>
              <li><a href="/services.html" class="hover:text-white">Services</a></li>
              <li><a href="/about.html" class="hover:text-white">About Us</a></li>
              <li><a href="/contact.html" class="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-white/10 bg-forest py-4 text-center text-sm text-white/70">
        <p>© Copyright 2026 | All Rights Reserved</p>
      </div>
    </footer>`
}

export function initLayout() {
  const activePage = document.body.dataset.page || 'home'
  const headerMount = document.getElementById('site-header')
  const footerMount = document.getElementById('site-footer')
  if (headerMount) headerMount.outerHTML = renderHeader(activePage)
  if (footerMount) footerMount.outerHTML = renderFooter()
}
