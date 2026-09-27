import { Link } from 'react-router-dom'
import { Snowflake, BadgeCheck } from 'lucide-react'

export default function HampersHero() {
  return (
    <section className="relative w-full bg-surface-container-low overflow-hidden pb-10 pt-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        <nav className="flex items-center gap-2 text-on-surface-variant text-label-md uppercase tracking-wider mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Luxury Hampers &amp; Chocolates</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping" />
              <span className="text-[11px] tracking-widest uppercase text-tertiary">Festive &amp; Corporate Gifting</span>
            </div>
            <h1 className="font-display text-display-lg text-primary tracking-tight leading-tight">
              Artisanal Hampers &amp; Handcrafted Gourmet Pairings
            </h1>
            <p className="text-body-lg text-secondary max-w-2xl">
              Hand-woven willow and velvet crates filled with fresh highland stems, premium Ceylon
              tea, and a selection of fine chocolates and pastries.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <Snowflake size={24} />
              </div>
              <div>
                <p className="text-title-md text-primary">Chilled Van Logistics</p>
                <p className="text-body-sm text-secondary">Careful, temperature-conscious delivery across Colombo &amp; suburbs</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <BadgeCheck size={24} />
              </div>
              <div>
                <p className="text-title-md text-primary">Estate Single-Origin</p>
                <p className="text-body-sm text-secondary">Genuine Ceylon tea and quality botanical ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}