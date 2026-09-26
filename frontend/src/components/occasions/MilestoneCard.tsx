export interface MilestoneProduct {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  tag: string
  tagColor: 'gold' | 'green'
  note: string
  ctaLabel: string
}

function formatLKR(amount: number) {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}

export default function MilestoneCard({ product }: { product: MilestoneProduct }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-all">
      <div className="w-full lg:w-1/2 aspect-[4/5] rounded-lg overflow-hidden bg-surface-container shrink-0">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-between h-full space-y-4">
        <div>
          <span
            className={`inline-block text-[11px] px-3 py-0.5 rounded-full font-bold mb-2 uppercase tracking-wider ${
              product.tagColor === 'gold' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-primary-fixed text-on-primary-fixed'
            }`}
          >
            {product.tag}
          </span>
          <h3 className="font-display text-headline-md text-primary">{product.name}</h3>
          <p className="text-body-md text-secondary mt-1">{product.description}</p>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[22px] text-primary font-display">{formatLKR(product.price)}</span>
            <span className="text-[11px] text-surface-tint">{product.note}</span>
          </div>
          <button className="w-full bg-primary text-on-primary text-label-md py-2.5 rounded-lg hover:bg-primary-container transition-colors shadow-sm">
            {product.ctaLabel}
          </button>
        </div>
      </div>
    </div>
  )
}