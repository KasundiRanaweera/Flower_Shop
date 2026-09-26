import type { LucideIcon } from 'lucide-react'
import OccasionProductCard, { type OccasionProduct } from './OccasionProductCard'

interface OccasionSectionProps {
  id: string
  visible: boolean
  eyebrow: string
  eyebrowIcon: LucideIcon
  title: string
  description: string
  products: OccasionProduct[]
  background?: 'surface' | 'surface-container-low'
}

export default function OccasionSection({
  id,
  visible,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  products,
  background = 'surface',
}: OccasionSectionProps) {
  return (
    <section
      id={`section-${id}`}
      className={`w-full py-14 ${background === 'surface-container-low' ? 'bg-surface-container-low' : 'bg-surface'} ${visible ? 'block' : 'hidden'}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <div className="flex items-center gap-2 text-tertiary text-[11px] uppercase tracking-widest">
              <EyebrowIcon size={16} />
              {eyebrow}
            </div>
            <h2 className="font-display text-headline-lg text-primary mt-1">{title}</h2>
            <p className="text-body-md text-secondary max-w-xl mt-1">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <OccasionProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}