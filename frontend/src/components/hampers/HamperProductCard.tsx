import { ShoppingBag, MessageCircle, Star } from 'lucide-react'
import { buildWhatsAppLink } from '../../lib/whatsapp'

export interface HamperProduct {
  id: string
  name: string
  series: string
  description: string
  imageUrl: string
  price: number
  badge: string
  deliveryTag: string
  footerNote: string
  rating: number
  reviewCount: number
  categories: string[]
}

function formatLKR(amount: number) {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}

export default function HamperProductCard({ product }: { product: HamperProduct }) {
  const whatsappLink = buildWhatsAppLink(`I'd like to order ${product.name} (Rs. ${product.price.toLocaleString('en-LK')})`)

  return (
    <article className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-high">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={product.imageUrl}
          alt={product.name}
        />
        <span className="absolute top-3 left-3 bg-primary text-on-primary text-[11px] px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider">
          {product.badge}
        </span>
        <span className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md text-primary text-[11px] px-3 py-0.5 rounded-full">
          {product.deliveryTag}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-secondary text-[11px] mb-1 uppercase tracking-wider">
            <span>{product.series}</span>
            <span className="flex items-center text-tertiary gap-0.5">
              <Star size={16} fill="currentColor" />
              {product.rating.toFixed(1)} ({product.reviewCount})
            </span>
          </div>
          <h3 className="font-display text-headline-md text-primary group-hover:text-surface-tint transition-colors">
            {product.name}
          </h3>
          <p className="text-body-sm text-secondary mt-1 line-clamp-2">{product.description}</p>
        </div>
        <div className="pt-2 bg-gradient-to-t from-surface-container-low/40 to-transparent rounded-lg p-2">
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-[11px] text-secondary block">PRICING</span>
              <span className="text-currency-md text-primary">{formatLKR(product.price)}</span>
            </div>
            <span className="text-outline text-body-sm">{product.footerNote}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* TODO (Phase 4): wire to CartContext.addItem() */}
            <button className="w-full bg-primary hover:bg-primary-container text-on-primary text-label-md py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
              <ShoppingBag size={18} /> Add to Cart
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-surface-container text-primary hover:bg-surface-container-high text-label-md py-2 rounded-lg transition-colors flex items-center justify-center gap-1"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}