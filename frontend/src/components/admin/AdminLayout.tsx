import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminTopbar from './AdminTopbar'
import ToastProvider from '../ui/ToastProvider'

// Wraps every /admin page with the sidebar + top bar, and lets any admin page show toasts.
// TODO (Phase 1 auth): wrap this in a <RequireOwner> guard so customers can't open /admin.
export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(true)

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background">
        <AdminSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          shopOpen={shopOpen}
          onToggleShop={() => setShopOpen((v) => !v)}
        />
        <div className="lg:pl-72">
          <AdminTopbar onMenuClick={() => setSidebarOpen(true)} shopOpen={shopOpen} />
          <main className="pt-20">
            <div className="px-4 lg:px-8 py-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </ToastProvider>
  )
}