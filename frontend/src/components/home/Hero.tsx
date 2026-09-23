import { ArrowRight, MessageCircle, Star } from 'lucide-react'
import { buildWhatsAppLink } from '../../lib/whatsapp'

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
]

export default function Hero() {
  const conciergeLink = buildWhatsAppLink('Hello Ceylon Blooms Concierge, I would like to order bespoke blooms')

  return (
    <section className="relative overflow-hidden bg-[#f3f8f4] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dfeae2] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a3a2f] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2e8b57]" />
              Fresh blooms from Sri Lankan growers
            </div>

            <h1 className="max-w-xl font-display text-5xl leading-[0.96] text-[#1a3a2f] md:text-6xl">
              Artisanal flowers for <span className="italic text-[#7d5c2a]">every heartfelt moment</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4d5b54]">
              Curated floral arrangements for birthdays, weddings, gifting, and everyday joy — handcrafted in Sri Lanka with fresh local blooms and reliable same-day delivery.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#featured-collection"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a3a2f] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(26,58,47,0.18)] transition hover:-translate-y-0.5 hover:bg-[#143227]"
              >
                Explore bouquets
                <ArrowRight size={18} />
              </a>
              <a
                href={conciergeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20ba59]"
              >
                <MessageCircle size={18} />
                WhatsApp order
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {AVATARS.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt="Customer review avatar"
                    className="h-10 w-10 rounded-full border-2 border-[#f3f8f4] object-cover"
                    style={{ zIndex: 10 - index }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#d8a52d]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-[#1a3a2f]">4.9/5</span>
                </div>
                <p className="text-sm text-[#53645e]">Loved by 12,400+ happy customers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#f5d9b5] blur-3xl" />
            <div className="absolute -right-2 bottom-8 h-28 w-28 rounded-full bg-[#dfeee3] blur-3xl" />

            <div className="relative mx-auto max-w-xl rounded-[2rem] border border-[#dfeae2] bg-white p-3 shadow-[0_35px_70px_rgba(26,58,47,0.12)]">
              <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="overflow-hidden rounded-[1.5rem] bg-[#f2eee5]">
                  <img
                    src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury bouquet of roses"
                    className="h-full min-h-[420px] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-[1.5rem] bg-[#eff4ee]">
                    <img
                      src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80"
                      alt="Fresh flowers arrangement"
                      className="h-44 w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem] bg-[#f7efe7]">
                    <img
                      src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"
                      alt="Flower bouquet in a vase"
                      className="h-56 w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 left-6 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6f68]">Signature bloom</p>
                <p className="mt-1 font-display text-2xl text-[#1a3a2f]">Rose & Orchid</p>
                <p className="text-sm text-[#51625d]">From Rs. 4,200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
