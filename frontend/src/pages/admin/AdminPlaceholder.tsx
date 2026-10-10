import { Link, useLocation } from 'react-router-dom'
import { Construction } from 'lucide-react'
import { ADMIN_NAV } from '../../components/admin/adminNav'

// Shown for admin pages that are planned but not built yet, so no sidebar link is a dead end.
export default function AdminPlaceholder() {
  const { pathname } = useLocation()
  // Exact match only. (A prefix match would let "Overview" at /admin claim every admin page.)
  const match = ADMIN_NAV.find((item) => item.path !== '/admin' && pathname === item.path)
  const title = match ? match.label : 'This page'

  return (
    <div className="max-w-2xl mx-auto bg-surface-container-lowest rounded-xl shadow-sm p-10 text-center space-y-4 mt-10">
      <div className="w-14 h-14 mx-auto rounded-full bg-surface-container flex items-center justify-center text-primary">
        <Construction size={26} />
      </div>
      <h1 className="font-display text-headline-md text-primary">{title} is coming soon</h1>
      <p className="text-body-md text-secondary">
        This part of the owner console is planned for a later step. The sidebar link is ready, so
        nothing breaks while we build it.
      </p>
      <Link to="/admin" className="inline-block text-label-md text-primary hover:underline">
        Back to Overview
      </Link>
    </div>
  )
}