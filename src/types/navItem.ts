export interface NavItem {
  label: string
  href: string
  isNew?: boolean
  subLabel?: string
  children?: Array<NavItem>
}
