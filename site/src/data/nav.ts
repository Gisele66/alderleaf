import { withBase } from '../utils/path'

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
  { href: withBase('/removal'), label: 'Tree Removal', id: 'removal' as const },
  { href: withBase('/brushing-land-clearing'), label: 'Brushing / Land Clearing', id: 'brushing-land-clearing' as const },
  { href: withBase('/pruning'), label: 'Tree Pruning and Shrub Trimming', id: 'pruning' as const },
  { href: withBase('/chips'), label: 'Firewood, Wood-Chipping & Mulch', id: 'chips' as const },
  { href: withBase('/lawn-care'), label: 'Lawn Care', id: 'lawn-care' as const },
  { href: withBase('/property-maintenance'), label: 'Property Maintenance', id: 'property-maintenance' as const },
  { href: withBase('/removal#assessment'), label: 'Tree Assessments', id: 'removal' as const },
]

export const mainNav = [
  { href: withBase('/'), label: 'Home', id: 'home' as const },
  { href: withBase('/services'), label: 'Services', id: 'services' as const },
  { href: withBase('/about'), label: 'About Us', id: 'about' as const },
  { href: withBase('/contact'), label: 'Contact Us', id: 'contact' as const },
]

export function isServicePage(page: PageId) {
  return serviceLinks.some((link) => link.id === page)
}
