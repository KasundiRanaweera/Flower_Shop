import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import HamperProductCard, { type HamperProduct } from './HamperProductCard'

const CATEGORIES = [
  { id: 'all', label: 'All Curations' },
  { id: 'tea', label: 'Botanical & Artisanal Tea Crates' },
  { id: 'choc', label: 'Chocolate Indulgence Hampers' },
  { id: 'executive', label: 'Executive Celebration Chests' },
  { id: 'wellness', label: 'Bespoke Wellness & Aromatherapy' },
]

// TODO (Phase 2): replace with a real fetch to GET /api/products?category=luxury-hampers
const PRODUCTS: HamperProduct[] = [
  {
    id: '1',
    name: 'The Heritage Ceylon Sovereign Crate',
    series: 'Executive & Tea Reserve',
    description: 'Crimson garden roses, single-estate tea in a handcrafted brass caddy, and a selection of fine chocolates.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1DZbuQrWe9DHbQzno6YA5aDAiz3fPS3Ph5QEqWGUwNS_UVZ5kWQpgkVtdajPVKoPRY9hkQ4ug5AM8k8N9X4t_R3NV9c4aED9cRb1x17g7sdA9z_bNkFACd4Plr3nHHdG_VWyntwSFVyfKC__5AC9VtP9a-SvMUfL-1eoClkOAgk2O_IbOIgkKDlxYT__RbgYo3QuXrqADkOgnZKGAqo927Gn12XKZBqFvLH3ImMicJa9TKjyB64d80Q',
    price: 38500,
    badge: 'Signature Grandeur',
    deliveryTag: 'Colombo Express',
    footerNote: 'Incl. all taxes',
    rating: 4.9,
    reviewCount: 42,
    categories: ['executive', 'tea', 'choc'],
  },
  {
    id: '2',
    name: 'Atelier Sweet Romance Chest',
    series: 'Sweet Indulgence',
    description: 'Pastel roses, French macarons, wild honey, and a scented botanical candle.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw8XzWG6xkvZ5CBAsAjp2vvS1PfwcLxhdxFNcFQ4pVbWGyh9AtsEE2a33edgbMzRXyKyhoy4CECkh7kxo7cNzsl1MfTb6Tkn4OH197UHIP_eljndRpiUDd_BHg32SZYg4WQ8gH-793R8MYmXNrEMhzKwrAGqj8pT6a1fTKimT-Ez1BNuxMuDeQ0-J8cKIAwk6XIuV45XZ3-qy5Q7PvlwXGtOlJpAHRGYf6B11gK7E7g8LuzG51KZNhUA',
    price: 26000,
    badge: 'Romantic Classic',
    deliveryTag: 'Same-Day',
    footerNote: 'Free Ribbon Wrap',
    rating: 5.0,
    reviewCount: 68,
    categories: ['choc'],
  },
  {
    id: '3',
    name: 'The Diplomatic Gourmet Hamper',
    series: 'Formal Gifting Selection',
    description: 'Tall orchid arrangement, roasted macadamias, chocolate truffles, and rare Ceylon black tea.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWKWWk27C0BGfLplPklyU6nsQAos-D4OxRqgA4YPSELsdclfNE8kzb3FmwMg0VrdF-YKxVHtZMHfxEeJcyHXlTXtLwV748vE26w_JDua-KH9LuqSTFNYdDZ0ZELbnqSXs1Zwnk4lX5CUHcOPGZCV53a1We7uNrHE7QeRnFJq5mnTNAKx1cy5nKZ8rqG2qfs0gIWqvX5wuwV1T8o3h4DKRgIk-3Bpxwjb7k0ILMtpYfusEKiLhE7L4wgA',
    price: 45000,
    badge: 'VIP Protocol',
    deliveryTag: 'White Glove',
    footerNote: 'Official Casket',
    rating: 5.0,
    reviewCount: 29,
    categories: ['executive', 'tea', 'choc'],
  },
  {
    id: '4',
    name: 'Velvet Bloom & Chocolate Box',
    series: 'Chocolate & Rose Pairing',
    description: '24 long-stem crimson roses beside a selection of fine pralines in a reusable velvet keepsake hatbox.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB_xsvYpM5O2HSf6ZwanAfZ0vTgs1oL8HdaQhBznujkgCiPmMWXhC08ejvy__7U5JB5jQYd5wq4FLXLEywN16q98w1LwsgRO96TpdVKAlqhWGeSAwsS7IpgQIr6wFhRiK5NRx2NWU3Qj2uA6Tg5LiohtAJcpK6Aygr8xt3r2EZfyhBFzeGBe-rWDPo9kxbVrT5Pgbean0WywtAzP_uD2Uthh0_7u2eo044ZhSBCiYcU6XgH3AuanBDsg',
    price: 21500,
    badge: 'Bestseller',
    deliveryTag: 'Same-Day',
    footerNote: 'Gift Box Included',
    rating: 4.8,
    reviewCount: 88,
    categories: ['choc'],
  },
  {
    id: '5',
    name: 'Ceylon Spice & Highland Botanical Crate',
    series: 'Wellness & Botanicals',
    description: 'Organic Ceylon cinnamon quills, an aromatherapy candle, fresh mountain lilies, and eucalyptus stems.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx7qTMRzhknRLXFgxcQ6TftA-ab_pe6Ywq-NguNXF5OLTFhFA5N-fwJeG86Y8bTsQPQZFdruhABM8AjYWslTbbclgsxofBLnYLjz9n8h6opCmg-sN6tuEqNrFELoSzHm7_nHewRgxcyl2i8Bq3oIQfgo0OCOx096VsQPWXsG1OSxx83kDAzYJipt_s0wpsCcD3LITRCNcxhoQCM_uG8yscY52wrClGaUTSbRps0PGEjN-cvU5CJU7owA',
    price: 29000,
    badge: 'Aromatherapy Reserve',
    deliveryTag: 'Eco Luxe',
    footerNote: 'Pine Wood Box',
    rating: 4.9,
    reviewCount: 34,
    categories: ['wellness'],
  },
  {
    id: '6',
    name: 'The Connoisseur Tea & Floral Gift',
    series: 'Tea Connoisseur',
    description: 'Artisanal ceramic teaware, garden-fresh blush flowers, and whole-leaf estate tea in an airtight tin.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANPr3j62I-kQhGwnB1XE3XUPnBiapj_lVF86RFSoW1E4bJO4CNdkP676ibHJ9lIeqVOIlZNmcx6dOiyiNVQe8xlVoUUnVLRrX8dTaL8qGjuSToTqHYfQphYcwVpHXHb9u-wh4Qy-IZMWhfJUfVmghxE-q722RzEjs6PTLghR0U_OoeZ9K1ya0lvPZKck0wwjJnF5ZkHVQiytxBC4LlFFwxWs4saLZQ0Qr7Rm_rTFgL6SIxvXETPRWNDQ',
    price: 18900,
    badge: 'High Tea Atelier',
    deliveryTag: 'Ceramic Keepsake',
    footerNote: 'Complete Set',
    rating: 4.7,
    reviewCount: 53,
    categories: ['tea', 'wellness'],
  },
]

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.categories.includes(activeCategory))

  return (
    <>
      <section className="w-full bg-surface py-3 shadow-sm sticky top-24 z-30 backdrop-blur-md bg-surface/90">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-start gap-2 overflow-x-auto py-1">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={
                  cat.id === activeCategory
                    ? 'px-4 py-1.5 rounded-full bg-primary text-on-primary text-label-md tracking-wider uppercase transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap'
                    : 'px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-label-md tracking-wider uppercase transition-all whitespace-nowrap'
                }
              >
                {i === 0 && <Sparkles size={16} />}
                {cat.label}
                {cat.id === 'all' && ` (${PRODUCTS.length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-secondary">Curated Reserve</span>
              <h2 className="font-display text-headline-lg text-primary">Master Florist &amp; Gourmet Gift Crates</h2>
            </div>
            <p className="text-body-sm text-secondary mt-2 md:mt-0">
              Hand-tied silk ribbons • Gift card included • Careful delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <HamperProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}