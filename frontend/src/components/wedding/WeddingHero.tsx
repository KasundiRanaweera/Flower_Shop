import { Link } from 'react-router-dom'
import { Home, Flower2, ArrowRight, Images } from 'lucide-react'

export default function WeddingHero() {
  return (
    <>
      {/* Breadcrumb bar */}
      <div className="w-full bg-surface-container-low py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between text-secondary">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm">
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <Home size={16} />
              Home
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary text-body-sm font-semibold">Wedding &amp; Events (Poruwa Ceremonies)</span>
          </nav>
          <div className="hidden md:flex items-center gap-2 text-[11px] text-surface-tint uppercase tracking-widest">
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
            Now Booking Upcoming Wedding Seasons
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full bg-primary text-on-primary overflow-hidden py-10 lg:py-32">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, var(--color-tertiary-container), transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-container px-4 py-1 rounded-full text-primary-fixed text-[11px] uppercase tracking-widest shadow-sm">
                <Flower2 size={15} className="text-tertiary-fixed" />
                Ceylon Botanical Heritage &amp; Contemporary Grandeur
              </div>
              <h1 className="font-display text-display-lg text-on-primary tracking-tight leading-[1.1]">
                Bespoke Poruwa Ceremonies &amp; Monumental Floral Architecture
              </h1>
              <p className="text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                Translating cherished Sri Lankan wedding traditions into living floral designs. From
                lotus-draped Poruwa stages in Colombo ballrooms to highland orchids framing colonial
                arches, we create florals worthy of life's most meaningful vows.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 bg-tertiary-container hover:bg-tertiary text-on-tertiary-container hover:text-on-tertiary text-title-md px-6 py-4 rounded-lg shadow-md transition-all"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-primary-container/80 hover:bg-primary-container text-on-primary text-title-md px-6 py-4 rounded-lg transition-all"
                >
                  <Images size={20} />
                  <span>View Our Work</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-xl overflow-hidden shadow-xl bg-surface-container-highest aspect-[4/5] relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Traditional Sri Lankan Poruwa decorated with fresh lotuses, orchids and jasmine"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXKwuWqrDZ0SwyW_mu74z6OnMyMBubVk9Y4V73BW6XoBCilacZ8Ab5zRt4s_0aDkLK-LX5REYlASJJnR8uKqpTXS9hs51CdaeooboPV0x0JzEl6gfRA_c775F480YG3ieTPAYRNQ3OXNt6PB8WXQWGVNYDo1xG1BJardIzdpsqi8pdUR0iTKbub-BQiJpCrwGCnRv5GWmjFVED-4Jm0uXizyEQWNPP4iTDVKqJFiTDOSXBk_JmV3Vu5w"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface/90 backdrop-blur-md rounded-lg text-on-surface shadow-md">
                    <p className="text-[11px] uppercase tracking-widest text-surface-tint">Featured Design</p>
                    <p className="font-display text-headline-sm text-primary">The Lotus &amp; Brass Poruwa</p>
                    <p className="text-body-sm text-secondary">Colombo ballroom celebration</p>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-surface-container-lowest text-primary p-4 rounded-xl shadow-xl hidden sm:flex flex-col items-center justify-center text-center w-28 h-28 border border-secondary-container/50">
                  <span className="font-display text-headline-md leading-none text-primary">Fresh</span>
                  <span className="text-[11px] uppercase text-secondary mt-1">Highland Blooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}