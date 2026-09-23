import { Link } from 'react-router-dom'
import type { Category } from '../../types'

const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Luxury Bouquets',
    slug: 'luxury-bouquets',
    styleCount: 28,
    fromPrice: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2',
    name: 'Romantic Roses',
    slug: 'romantic-roses',
    styleCount: 18,
    fromPrice: 3800,
    imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '3',
    name: 'Lilies & Orchids',
    slug: 'lilies-orchids',
    styleCount: 16,
    fromPrice: 5200,
    imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '4',
    name: 'Gift Hampers',
    slug: 'gift-hampers',
    styleCount: 12,
    fromPrice: 6500,
    imageUrl: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '5',
    name: 'Wedding Floral',
    slug: 'wedding-floral',
    styleCount: 9,
    fromPrice: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '6',
    name: 'Indoor Plants',
    slug: 'indoor-plants',
    styleCount: 14,
    fromPrice: 2900,
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
]

function formatLKR(amount: number) {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}

export default function CategoryGrid() {
  return (
    <section className="w-full bg-[#f8faf8] py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5d6f68]">Curated collections</p>
            <h2 className="mt-2 font-display text-4xl text-[#1a3a2f] md:text-5xl">Shop by occasion</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#4d5852] md:text-base">
            Fresh seasonal blooms selected for birthdays, anniversaries, elegant gifting and unforgettable Sri Lankan celebrations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/products/${cat.slug}`}
              className="group overflow-hidden rounded-[1.6rem] border border-[#dfeae2] bg-white shadow-[0_18px_35px_rgba(22,30,28,0.04)] transition hover:-translate-y-1 hover:shadow-[0_26px_45px_rgba(22,30,28,0.08)]"
            >
              <div className="relative h-72 overflow-hidden bg-[#edf3ee]">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-[#1a3a2f]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  {cat.styleCount} styles
                </span>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-display text-[2rem] text-[#1a3a2f]">{cat.name}</h3>
                <p className="text-sm text-[#4d5852]">From {formatLKR(cat.fromPrice)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
