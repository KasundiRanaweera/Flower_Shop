import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ADMIN_NAV } from './adminNav'

interface AdminSidebarProps {
  open: boolean
  onClose: () => void
  shopOpen: boolean
  onToggleShop: () => void
}

export default function AdminSidebar({ open, onClose, shopOpen, onToggleShop }: AdminSidebarProps) {
  // Let the owner close the mobile drawer with the Escape key.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      {open && <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={onClose} aria-hidden="true" />}

      <aside
        aria-label="Owner navigation"
        className={`fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col min-h-0">
          <div className="h-20 px-6 flex items-center gap-3 shrink-0">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-display font-bold">
              CP
            </div>
            <div className="flex flex-col">
              <span className="font-display text-headline-sm text-primary leading-none tracking-tight">Ceylon Petals</span>
              <span className="text-[11px] uppercase tracking-widest text-on-surface-variant mt-1">Owner Console</span>
            </div>
          </div>

          <div className="px-6 py-3 shrink-0">
            {/* TODO: show the real shop name from GET /api/shop-settings */}
            <div className="p-3 rounded-lg bg-surface-container flex flex-col gap-1">
              <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">Your Shop</span>
              <span className="text-title-md text-primary">Ceylon Petals, Colombo</span>
            </div>
          </div>

          <nav className="flex flex-col gap-1 px-4 mt-1 overflow-y-auto">
            {ADMIN_NAV.map(({ path, label, icon: Icon, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg text-title-md transition-colors ${
                    isActive
                      ? 'bg-primary-container text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`
                }
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 shrink-0">
          {/* TODO: persist this in ShopSettings (needs a new isAcceptingOrders field) */}
          <div className="p-3 rounded-lg bg-surface-container-lowest flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[11px] text-on-surface-variant uppercase">Storefront</span>
              <span className="text-body-sm text-on-surface font-semibold">
                {shopOpen ? 'Accepting orders' : 'Orders paused'}
              </span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={shopOpen}
              aria-label="Toggle accepting orders"
              onClick={onToggleShop}
              className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${shopOpen ? 'bg-primary' : 'bg-outline-variant'}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  shopOpen ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}