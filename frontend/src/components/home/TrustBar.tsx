import { Truck, Flower2, ShieldCheck, ScrollText } from 'lucide-react'

const ITEMS = [
  { icon: Truck, title: 'Same-Day Colombo', desc: 'Guaranteed express delivery in 3 hrs' },
  { icon: Flower2, title: '7-Day Freshness', desc: 'Hydro-conditioned highland stems' },
  { icon: ShieldCheck, title: 'PayHere & COD', desc: 'Global Cards, AMEX & Local Vishwa' },
  { icon: ScrollText, title: 'Bespoke Calligraphy', desc: 'Hand-scribed card & luxury ribbon' },
]

export default function TrustBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-12 mt-10">
      <div className="bg-surface-container-lowest rounded-xl shadow-sm p-4 lg:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ITEMS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3 p-1">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
              <Icon size={24} />
            </div>
            <div>
              <h2 className="text-title-md text-primary">{title}</h2>
              <p className="text-body-sm text-secondary">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
