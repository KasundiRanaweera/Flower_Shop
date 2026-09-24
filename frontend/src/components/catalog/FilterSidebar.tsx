import { Link } from 'react-router-dom'
import { Flower, MapPin, ArrowRight } from 'lucide-react'

const SPECIES = [
  { label: 'Garden Roses', count: 24, checked: true },
  { label: 'Oriental Lilies', count: 9, checked: true },
  { label: 'Cloud Hydrangeas', count: 6, checked: true },
  { label: 'Dendrobium Orchids', count: 11, checked: false },
  { label: 'Spray Carnations', count: 8, checked: false },
  { label: 'White Gypsophila', count: 5, checked: false },
]

const COLORS = [
  { label: 'Ruby Crimson', hex: '#8E001A', count: 16, active: false },
  { label: 'Blush Pastel & Cream', hex: '#F4C6C6', count: 14, active: true },
  { label: 'Golden Sunlight', hex: '#E5B235', count: 8, active: false },
  { label: 'Pure Ivory & Pearl', hex: '#F9F6F0', count: 10, active: false },
  { label: 'Deep Botanical Green', hex: '#1A3A2F', count: 7, active: false },
]

export default function FilterSidebar() {
  return (
    <aside className="space-y-4">
      {/* Species */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-title-md text-primary">Flower Species</h3>
          <Flower size={18} className="text-secondary" />
        </div>
        <div className="space-y-1.5 text-body-sm text-on-surface">
          {SPECIES.map((item) => (
            <label key={item.label} className="flex items-center justify-between cursor-pointer py-1 hover:text-primary">
              <span className="flex items-center gap-2">
                <input defaultChecked={item.checked} className="accent-primary rounded w-4 h-4" type="checkbox" />
                {item.label}
              </span>
              <span className="text-[11px] text-secondary">{item.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm space-y-2">
        <h3 className="text-title-md text-primary">Curated Colorway</h3>
        <div className="grid grid-cols-1 gap-2 text-body-sm">
          {COLORS.map((c) => (
            <button
              key={c.label}
              className={`flex items-center justify-between p-1.5 rounded-lg transition-colors text-left group ${
                c.active ? 'bg-surface-container-low' : 'hover:bg-surface-container-low'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: c.hex }} />
                <span className={c.active ? 'font-bold text-primary' : 'group-hover:text-primary'}>{c.label}</span>
              </span>
              <span className={`text-[11px] ${c.active ? 'text-primary font-bold' : 'text-secondary'}`}>{c.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-title-md text-primary">Price Bracket (LKR)</h3>
          <span className="text-[11px] text-tertiary-container font-bold">Max: Rs. 35,000</span>
        </div>
        <input className="w-full accent-primary cursor-pointer" max="35000" min="8000" step="500" defaultValue="25000" type="range" />
        <div className="flex items-center justify-between text-currency-md text-primary pt-1">
          <span>Rs. 8,000</span>
          <span>Rs. 25,000</span>
        </div>
        <div className="pt-2 flex flex-wrap gap-1.5">
          <span className="text-[11px] bg-surface-container px-2 py-1 rounded text-secondary">Under Rs. 12,000 (8)</span>
          <span className="text-[11px] bg-primary-container text-on-primary px-2 py-1 rounded">Rs. 12,000 - 20,000 (26)</span>
          <span className="text-[11px] bg-surface-container px-2 py-1 rounded text-secondary">Rs. 20,000+ (14)</span>
        </div>
      </div>

      {/* Delivery zones */}
      <div className="bg-surface-container-low p-4 rounded-xl shadow-sm space-y-1">
        <div className="flex items-center gap-2 text-primary text-title-md">
          <MapPin size={20} />
          <span>Express Zones</span>
        </div>
        <p className="text-body-sm text-secondary leading-relaxed">
          Same-day delivery available across Colombo 01-15, Rajagiriya, Battaramulla, Nawala, Dehiwala and Mount Lavinia.
        </p>
        <div className="pt-2">
          <Link to="/delivery-areas" className="inline-flex items-center gap-1 text-[11px] text-primary font-bold hover:underline">
            View full delivery schedule
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </aside>
  )
}