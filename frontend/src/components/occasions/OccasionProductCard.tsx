export interface OccasionProduct {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  badge: string
  footerNote: string
  ctaLabel: string
}

function formatLKR(amount: number) {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}

export default function OccasionProductCard({ product }: { product: OccasionProduct }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={product.imageUrl}
          alt={product.name}
        />
        <span className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md text-primary text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
          {product.badge}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between bg-surface-container-lowest">
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-display text-headline-sm text-primary">{product.name}</h3>
            <span className="text-currency-md text-primary whitespace-nowrap ml-2">{formatLKR(product.price)}</span>
          </div>
          <p className="text-body-sm text-secondary line-clamp-2">{product.description}</p>
        </div>
        <div className="pt-4 mt-4 bg-surface-container-low -mx-6 -mb-6 p-4 flex items-center justify-between gap-2">
          <span className="text-[11px] text-secondary">{product.footerNote}</span>
          {/* TODO (Phase 4): wire to CartContext / checkout flow */}
          <button className="bg-primary text-on-primary text-label-md px-4 py-2 rounded-lg hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap">
            {product.ctaLabel}
          </button>
        </div>
      </div>
    </div>
  )
}