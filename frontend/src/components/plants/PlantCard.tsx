import { ShoppingBag, MessageCircle, Droplet } from 'lucide-react'
import { buildWhatsAppLink } from '../../lib/whatsapp'

export interface Plant {
  id: string
  name: string
  series: string
  description: string
  imageUrl: string
  price: number
  badges: string[]
  vesselNote: string
  careLabel: string
  category: string
  light: string
  pet: string
  vessel: string
}

function formatLKR(amount: number) {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}

export default function PlantCard({ plant }: { plant: Plant }) {
  const whatsappLink = buildWhatsAppLink(`I'm interested in the ${plant.name}`)

  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          src={plant.imageUrl}
          alt={plant.name}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {plant.badges.map((badge) => (
            <span key={badge} className="bg-primary text-on-primary text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {badge}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm">
          <span className="text-[11px] text-secondary">{plant.vesselNote}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display text-headline-sm text-primary group-hover:text-primary-container transition-colors">{plant.name}</h3>
          </div>
          <p className="text-body-sm text-secondary line-clamp-2">{plant.description}</p>
        </div>
        <div className="pt-1 border-t border-surface-container/50 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] text-secondary uppercase block">Price</span>
              <span className="text-currency-md text-primary">{formatLKR(plant.price)}</span>
            </div>
            <span className="text-body-sm text-on-surface-variant flex items-center gap-1">
              <Droplet size={16} className="text-tertiary" /> {plant.careLabel}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* TODO (Phase 4): wire to CartContext.addItem() */}
            <button className="w-full bg-primary text-on-primary py-2.5 px-3 rounded-lg text-label-md flex items-center justify-center gap-1.5 hover:bg-primary-container transition-colors shadow-sm">
              <ShoppingBag size={18} /> Add to Cart
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-surface-container-low text-primary hover:bg-secondary-container py-2.5 px-3 rounded-lg text-label-md flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle size={18} className="text-[#25D366]" /> Reserve
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}