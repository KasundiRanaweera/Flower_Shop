import {
  LayoutDashboard,
  ClipboardList,
  Package,
  Tags,
  Boxes,
  Users,
  MessageSquareText,
  TrendingUp,
  Settings,
  type LucideIcon,
} from 'lucide-react'

export interface AdminNavItem {
  path: string
  label: string
  icon: LucideIcon
  end?: boolean
}

// One list drives the sidebar AND the "coming soon" placeholder titles.
export const ADMIN_NAV: AdminNavItem[] = [
  { path: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { path: '/admin/orders', label: 'Orders', icon: ClipboardList },
  { path: '/admin/products', label: 'Products', icon: Package },
  { path: '/admin/categories', label: 'Categories', icon: Tags },
  { path: '/admin/inventory', label: 'Inventory', icon: Boxes },
  { path: '/admin/customers', label: 'Customers', icon: Users },
  { path: '/admin/inquiries', label: 'Custom Inquiries', icon: MessageSquareText },
  { path: '/admin/analytics', label: 'Analytics', icon: TrendingUp },
  { path: '/admin/settings', label: 'Settings', icon: Settings },
]