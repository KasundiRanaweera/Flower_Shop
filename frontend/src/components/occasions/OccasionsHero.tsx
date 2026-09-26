import { Link } from 'react-router-dom'
import { ChevronRight, Sparkles, ShieldCheck } from 'lucide-react'

export default function OccasionsHero() {
  return (
    <>
      <section className="max-w-7xl mx-auto w-full px-4 lg:px-12 pt-4 pb-1">
        <div className="flex items-center gap-2 text-label-md text-secondary">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Curated Occasions</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto w-full px-4 lg:px-12 pt-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-2 bg-surface-container text-surface-tint px-4 py-1 rounded-full text-[11px] uppercase tracking-widest">
              <Sparkles size={15} />
              Arrangements for Every Occasion
            </div>
            <h1 className="font-display text-headline-lg lg:text-[44px] lg:leading-[52px] text-primary tracking-tight">
              Celebrate Every Milestone in Ceylon Splendour
            </h1>
            <p className="text-body-lg text-secondary max-w-2xl">
              From quiet family gatherings to grand celebrations across Colombo, our floral
              arrangements are designed to mark life's moments with care and craftsmanship.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-2">
            <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-title-md text-primary">Islandwide Punctuality</h4>
                <p className="text-body-sm text-secondary">Careful, temperature-conscious handling from our salon to your door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}