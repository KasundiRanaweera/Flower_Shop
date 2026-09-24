import { Link } from 'react-router-dom'
import { Search, Truck, UserCircle, ShoppingBag, User } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Fresh Bouquets', path: '/products/fresh-bouquets' },
  { label: 'Occasions', path: '/products/occasions' },
  { label: 'Luxury Hampers', path: '/products/luxury-hampers' },
  { label: 'Wedding & Events', path: '/wedding-events' },
  { label: 'Indoor Plants', path: '/products/indoor-plants' },
  { label: 'About', path: '/about' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#dfeae2] bg-[rgba(245,251,246,0.82)] backdrop-blur-xl">
      <div className="bg-[#1a3a2f] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e9f2ee] lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 md:flex-row md:text-left">
          <span>Same-day flower delivery across Colombo and nearby suburbs</span>
          <span>WhatsApp: +94 77 123 4567</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a3a2f] font-display text-lg font-bold text-white">
            CP
          </div>
          <div>
            <div className="font-display text-[1.35rem] leading-none text-[#1a3a2f]">Ceylon Blooms</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[#5a665f]">Sri Lankan flower studio</div>
          </div>
        </Link>

        <div className="hidden flex-1 max-w-md xl:block">
          <div className="flex items-center rounded-full border border-[#dfeae2] bg-white px-3 shadow-sm">
            <Search className="text-[#61736b]" size={18} />
            <input
              type="text"
              placeholder="Search bouquets, hampers, roses..."
              className="w-full border-0 bg-transparent py-2 pl-2 text-sm text-[#1a3a2f] placeholder:text-[#75857b] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-[#dfeae2] bg-white px-3 py-2 text-xs font-semibold text-[#1a3a2f] sm:flex">
            <span className="text-[#5d6d66]">LKR</span>
            <span>Rs.</span>
          </div>
          <Link
            to="/track-order"
            className="hidden items-center gap-1 text-sm font-medium text-[#33443d] lg:flex"
          >
            <Truck size={16} />
            Track order
          </Link>
          <Link
            to="/sign-in"
            className="hidden items-center gap-1 text-sm font-medium text-[#33443d] sm:flex"
          >
            <UserCircle size={16} />
            Sign in
          </Link>
          <button className="flex items-center gap-2 rounded-full bg-[#1a3a2f] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(26,58,47,0.14)] transition hover:bg-[#143227]">
            <ShoppingBag size={16} />
            <span>Cart</span>
            <span className="rounded-full bg-[#dfeadf] px-2 py-0.5 text-[10px] font-bold text-[#1a3a2f]">2</span>
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a3a2f] text-white">
            <User size={16} />
          </div>
        </div>
      </div>

      <div className="hidden border-t border-[#dfeae2] bg-[#f2f7f4] lg:block">
        <nav className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-4 py-3 lg:px-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-[#465650] transition hover:text-[#1a3a2f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
