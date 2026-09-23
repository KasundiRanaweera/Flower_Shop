import { Heart, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react'
import { buildWhatsAppLink } from '../../lib/whatsapp'
import type { Product } from '../../types'

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Rose Signature',
    description: 'Velvety red roses and eucalyptus arranged in a premium hand-tied bouquet for heartfelt gifting.',
    imageUrl: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80',
    price: 4200,
    discountPrice: 5200,
    badge: 'Best seller',
    secondaryBadge: 'Same-day',
    tags: ['Fresh roses', 'Colombo delivery'],
    note: 'Save 19%',
  },
  {
    id: '2',
    name: 'Nuwara Eliya Bloom',
    description: 'A dreamy pastel arrangement with hydrangeas, roses and soft foliage inspired by Sri Lankan highlands.',
    imageUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
    price: 5100,
    badge: 'Highland pick',
    tags: ['Hydrangeas', 'Seasonal'],
    note: 'Freshly cut',
  },
  {
    id: '3',
    name: 'Golden Lily Luxe',
    description: 'An elegant arrangement of lilies and orchids finished with a sculptural luxury vase.',
    imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    price: 6800,
    discountPrice: 8200,
    badge: 'Luxury',
    tags: ['Orchids', 'Gift-ready'],
    note: 'Free wrap',
  },
  {
    id: '4',
    name: 'Bespoke Gift Hamper',
    description: 'Flowers, chocolates and a handwritten note in one premium Sri Lankan gift hamper.',
    imageUrl: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
    price: 8900,
    badge: 'Popular',
    tags: ['Hamper', 'Luxury'],
    note: 'VIP delivery',
  },
]

function formatLKR(amount: number) {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}

export default function FeaturedProducts() {
  return (
    <section id="featured-collection" className="w-full bg-[#f3f8f4] py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a3a2f] shadow-sm">
              <Sparkles size={14} className="text-[#7d5c2a]" />
              Favourite picks
            </div>
            <h2 className="font-display text-4xl text-[#1a3a2f] md:text-5xl">Most-loved flower arrangements</h2>
          </div>
          <button className="w-fit rounded-full border border-[#dfeae2] bg-white px-4 py-2 text-sm font-semibold text-[#1a3a2f] shadow-sm">
            View all bouquets
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((product) => {
            const whatsappLink = buildWhatsAppLink(
              `I want to order ${product.name} (Rs. ${product.price.toLocaleString('en-LK')})`
            )

            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-[1.8rem] border border-[#dfeae2] bg-white shadow-[0_16px_30px_rgba(22,30,28,0.05)] transition hover:-translate-y-1 hover:shadow-[0_28px_48px_rgba(22,30,28,0.08)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex flex-col gap-2">
                    {product.badge ? (
                      <span className="rounded-full bg-[#f4edd7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#5a4c05]">
                        {product.badge}
                      </span>
                    ) : null}
                    {product.secondaryBadge ? (
                      <span className="rounded-full bg-[#1a3a2f] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                        {product.secondaryBadge}
                      </span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#1a3a2f] backdrop-blur-sm"
                  >
                    <Heart size={18} />
                  </button>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5d6f68]">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#edf3ee] px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-display text-[2rem] text-[#1a3a2f]">{product.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#4d5852]">{product.description}</p>
                  </div>

                  <div className="flex items-end justify-between gap-3 border-t border-[#edf1ee] pt-4">
                    <div>
                      <p className="font-display text-[1.8rem] text-[#1a3a2f]">{formatLKR(product.price)}</p>
                      {product.discountPrice ? (
                        <p className="text-sm text-[#7a847d] line-through">{formatLKR(product.discountPrice)}</p>
                      ) : null}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#2f7b53]">{product.note}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a3a2f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#143227]">
                      <ShoppingBag size={16} />
                      Add
                    </button>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20ba59]"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
