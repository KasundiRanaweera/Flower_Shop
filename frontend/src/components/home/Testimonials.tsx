import { Star } from 'lucide-react'
import type { Testimonial } from '../../types'

// TODO (later phase): replace with GET /api/testimonials once the Testimonial table has real data
const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dilshan Karunaratne',
    location: 'Colombo 05, Sri Lanka',
    rating: 5,
    message: "The WhatsApp concierge made the whole order effortless for my mother’s birthday in Colombo 05. The roses arrived fresh, beautifully arranged, and lasted beautifully for over a week.",
    orderedItem: "Ordered 'Royal Red Roses Box'",
    initials: 'DK',
  },
  {
    id: '2',
    name: 'Ananya Perera',
    location: 'Cinnamon Gardens, Colombo',
    rating: 5,
    message: 'This flower studio feels premium and personal from start to finish. The lilies arrived smelling incredible and the handwritten card made the gift feel extra special.',
    orderedItem: "Ordered 'Golden Lotus & Lily Urn'",
    initials: 'AP',
  },
  {
    id: '3',
    name: 'Rukshan Fernando',
    location: 'Battaramulla, Sri Lanka',
    rating: 5,
    message: 'We ordered a gourmet hamper for a graduation celebration and the delivery was perfectly on time. The packaging and presentation were elegant and very Sri Lankan in style.',
    orderedItem: "Ordered 'Artisan Truffle Hamper'",
    initials: 'RF',
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-14 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-[11px] text-tertiary uppercase tracking-widest block mb-1">
              Global Diaspora &amp; Islandwide Patrons
            </span>
            <h2 className="font-display text-headline-lg text-primary">Heartfelt Notes from Loved Ones</h2>
          </div>
          <p className="text-body-md text-secondary max-w-md mt-2 md:mt-0">
            Whether you are ordering from Central London, Melbourne, Toronto, or Cinnamon Gardens,
            we deliver warmth across miles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-tertiary">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[11px] bg-surface-container text-secondary px-2 py-0.5 rounded">
                    {t.location}
                  </span>
                </div>
                <p className="text-body-md text-on-surface leading-relaxed italic mb-4">"{t.message}"</p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-title-md text-primary">{t.name}</h3>
                  <p className="text-body-sm text-secondary">{t.orderedItem}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
