import { Link } from 'react-router-dom'
import { BadgeCheck, MapPin } from 'lucide-react'

const CUSTOMER_CARE_LINKS = [
  { label: 'Delivery Areas Colombo 01-15 & Greater Colombo', path: '/delivery-areas' },
  { label: 'Care Instructions', path: '/care-instructions' },
  { label: 'Card Message Guide', path: '/card-message-guide' },
  { label: 'Frequently Asked Questions', path: '/faq' },
  { label: 'Refund & Replacement Policy', path: '/refund-policy' },
  { label: 'Live Courier Tracking', path: '/track-order' },
]

const COLLECTION_LINKS = [
  { label: 'Nuwara Eliya Garden Roses', path: '/products/roses' },
  { label: 'Artisanal Ceylon Tea & Hamper Crates', path: '/products/luxury-hampers' },
  { label: 'Bespoke Anniversary Arrangements', path: '/products/occasions' },
  { label: 'Botanical Installation Consults', path: '/wedding-events' },
  { label: 'Exotic Tropical Indoor Stems', path: '/products/indoor-plants' },
  { label: 'Private Conservatory Visits', path: '/about' },
]

const PAYMENT_BADGES = ['PayHere Certified', 'Visa', 'MasterCard', 'Sampath Vishwa', 'AMEX', 'Cash on Delivery']

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-14 pb-6 text-on-surface-variant">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-on-primary font-display text-xs font-bold">
                CB
              </div>
              <span className="font-display text-headline-sm text-primary">Ceylon Blooms</span>
            </div>
            <p className="text-body-sm text-secondary leading-relaxed">
              Ceylon Blooms brings together premium seasonal flowers, local craftsmanship, and islandwide delivery for meaningful occasions across Sri Lanka.
            </p>
            <div className="flex items-center gap-2 text-primary text-[11px]">
              <BadgeCheck size={16} />
              Certified Ethical Highland Flora
            </div>
          </div>

          <div>
            <h3 className="font-display text-headline-sm text-primary mb-4">Customer Care</h3>
            <ul className="space-y-2 text-body-sm">
              {CUSTOMER_CARE_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-on-surface transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-headline-sm text-primary mb-4">Floral Collections</h3>
            <ul className="space-y-2 text-body-sm">
              {COLLECTION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-on-surface transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-headline-sm text-primary mb-4">Studio &amp; Service</h3>
            <p className="text-body-sm text-secondary mb-2">Visit our Colombo studio:</p>
            <div className="flex items-start gap-2 text-body-sm text-on-surface mb-4">
              <MapPin size={18} className="text-primary mt-0.5" />
              <span>Colombo 03, Sri Lanka</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-secondary block mb-2">
              Secure islandwide checkout
            </span>
            <div className="flex flex-wrap gap-2 text-[11px] text-secondary">
              {PAYMENT_BADGES.map((badge) => (
                <span key={badge} className="bg-surface px-2 py-0.5 rounded">{badge}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-4 border-t border-surface-container text-body-sm text-secondary">
          <p>© 2026 Ceylon Blooms. All rights reserved. Sri Lanka.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Sustainable Blooms</span>
            <span>•</span>
            <span>Ethical Sourcing</span>
            <span>•</span>
            <span>Punctual White-Glove Handover</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
