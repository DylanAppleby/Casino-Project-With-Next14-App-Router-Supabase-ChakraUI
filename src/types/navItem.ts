export interface TNavItem {
  label: string
  href: string
  isNew?: boolean
}

export interface INavBar {
  navItems?: TNavItem[]
}
