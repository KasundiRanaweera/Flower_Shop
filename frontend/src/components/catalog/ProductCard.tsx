import { useState } from 'react'
import { ShoppingBag, MessageCircle, Check, Sparkles, BadgeCheck, PenLine, Car, Clock } from 'lucide-react'
import { buildWhatsAppLink } from '../../lib/whatsapp'
import type { CatalogProduct } from '../../types'

function formatLKR(amount: number) {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}

export default function ProductCard({ product }: { product: CatalogProduct }) {
  const [added, setAdded] = useState(false)

  function handleQuickAdd() {
    // TODO (Phase 4): call CartContext.addItem(product) instead of this visual-only feedback
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const whatsappLink = buildWhatsAppLink(`I'd like a consultation about ${product.name} (Rs. ${product.price.toLocaleString('en-LK')})`)

  if (product.featured) {
    return (
      <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group sm:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
          <div className="md:col-span-6 relative min-h-[300px] overflow-hidden bg-surface-container">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              <span className="bg-tertiary text-on-tertiary text-[11px] px-2.5 py-1 rounded-full shadow-md font-bold flex items-center gap-1">
                <Sparkles size={14} />
                Master Florist Selection
              </span>
              <span className="bg-surface-container-lowest/95 backdrop-blur-md text-primary text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                {product.stemsLabel}
              </span>
            </div>
          </div>
          <div className="md:col-span-6 p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-secondary">{product.series}</span>
                <span className="bg-secondary-container text-on-secondary-container text-[11px] px-2 py-0.5 rounded font-semibold">
                  VIP Hand Delivery
                </span>
              </div>
              <h3 className="font-display text-headline-md text-primary group-hover:text-surface-tint transition-colors">
                {product.name}
              </h3>
              <p className="text-body-sm text-secondary leading-relaxed">{product.description}</p>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-on-surface-variant">
                <div className="flex items-center gap-1.5"><BadgeCheck size={16} className="text-primary" />Includes Keepsake Vase</div>
                <div className="flex items-center gap-1.5"><PenLine size={16} className="text-primary" />Handwritten Gift Card</div>
                <div className="flex items-center gap-1.5"><Car size={16} className="text-primary" />Careful Courier Handling</div>
                <div className="flex items-center gap-1.5"><Clock size={16} className="text-primary" />Choose Your Delivery Slot</div>
              </div>
            </div>
            <div className="pt-2 space-y-2">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] text-secondary block">Investment</span>
                  <span className="font-display text-headline-lg text-primary">{formatLKR(product.price)}</span>
                </div>
                <span className="text-[11px] text-emerald-800 bg-emerald-100 font-bold px-2 py-1 rounded">{product.note}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleQuickAdd}
                  className="w-full bg-primary text-on-primary hover:bg-primary-container text-label-md py-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-md"
                >
                  {added ? <Check size={18} /> : <ShoppingBag size={18} />}
                  {added ? 'Added to Bag' : 'Add to Bag'}
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white hover:bg-[#1EBE5D] text-label-md py-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-md"
                >
                  <MessageCircle size={18} />
                  Bespoke Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="bg-primary text-on-primary text-[11px] px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles size={13} className="text-tertiary-fixed" />
              {product.badge}
            </span>
          )}
          <span className="bg-surface-container-lowest/90 backdrop-blur-md text-primary text-[11px] px-2.5 py-0.5 rounded-full font-bold">
            {product.stemsLabel}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-secondary-container text-on-secondary-container text-[11px] px-2 py-0.5 rounded shadow-sm font-semibold">
            Same-Day Colombo
          </span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-secondary">{product.series}</p>
          <h3 className="font-display text-headline-sm text-primary group-hover:text-surface-tint transition-colors">
            {product.name}
          </h3>
          <p className="text-body-sm text-on-surface-variant line-clamp-2 mt-1">{product.description}</p>
        </div>
        <div className="pt-1 space-y-2">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-secondary block">Price</span>
              <span className="text-currency-md text-primary">{formatLKR(product.price)}</span>
            </div>
            {product.oldPrice ? (
              <span className="text-[11px] text-secondary line-through">{formatLKR(product.oldPrice)}</span>
            ) : (
              <span
                className={`text-[11px] px-2 py-0.5 rounded ${
                  product.noteTone === 'positive' ? 'text-emerald-700 bg-emerald-50' : 'text-secondary'
                }`}
              >
                {product.note}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleQuickAdd}
              className="w-full bg-primary text-on-primary hover:bg-primary-container text-label-md py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors shadow-sm"
            >
              {added ? <Check size={18} /> : <ShoppingBag size={18} />}
              {added ? 'Added' : 'Quick Add'}
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white hover:bg-[#1EBE5D] text-label-md py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors shadow-sm"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}