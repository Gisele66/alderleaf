export type PageId =
  | 'home'
  | 'services'
  | 'about'
  | 'contact'
  | 'quote'
  | 'removal'
  | 'brushing-land-clearing'
  | 'pruning'
  | 'chips'
  | 'lawn-care'
  | 'property-maintenance'

export const serviceLinks = [
  { href: '/removal', label: 'Tree Removal', id: 'removal' as const },
  { href: '/brushing-land-clearing', label: 'Brushing / Land Clearing', id: 'brushing-land-clearing' as const },
  { href: '/pruning', label: 'Tree Pruning and Shrub Trimming', id: 'pruning' as const },
  { href: '/chips', label: 'Firewood, Wood-Chipping & Mulch', id: 'chips' as const },
  { href: '/lawn-care', label: 'Lawn Care', id: 'lawn-care' as const },
  { href: '/property-maintenance', label: 'Property Maintenance', id: 'property-maintenance' as const },
  { href: '/removal#assessment', label: 'Tree Assessments', id: 'removal' as const },
]

export const mainNav = [
  { href: '/', label: 'Home', id: 'home' as const },
  { href: '/services', label: 'Services', id: 'services' as const },
  { href: '/about', label: 'About Us', id: 'about' as const },
  { href: '/contact', label: 'Contact Us', id: 'contact' as const },
]

export function isServicePage(page: PageId) {
  return serviceLinks.some((link) => link.id === page)
}
