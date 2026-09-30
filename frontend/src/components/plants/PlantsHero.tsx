import { Wind, Droplet, Flower2, Headset } from 'lucide-react'

const BADGES = [
  { icon: Wind, label: 'Air-Purifying Varieties' },
  { icon: Droplet, label: 'Acclimatized for Colombo Humidity' },
  { icon: Flower2, label: 'Hand-Crafted Pots Included' },
]

export default function PlantsHero() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low px-4 lg:px-12 pt-10 pb-20">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-tertiary-container/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-surface-container-lowest px-4 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest text-primary">Living Greenery • Hand-Thrown Ceramic Pots</span>
            </div>
            <h1 className="font-display text-display-lg text-primary tracking-tight leading-none">
              Curated Foliage &amp; <span className="italic font-normal">Sculptural Indoor Plants</span>
            </h1>
            <p className="text-body-lg text-secondary max-w-2xl leading-relaxed">
              Healthy, well-conditioned indoor plants and architectural greenery, potted in
              hand-thrown Sri Lankan ceramic and terracotta vessels.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {BADGES.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface-container-lowest text-label-md text-on-surface shadow-sm">
                  <Icon size={17} className="text-primary" />
                  {label}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-label-md shadow-sm font-semibold">
                <Headset size={17} />
                Complimentary Plant Care Support
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="w-full lg:max-w-xs bg-surface-container-lowest p-6 rounded-xl shadow-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase text-secondary">Our Greenhouse</span>
                <span className="bg-primary/10 text-primary text-[11px] px-2 py-0.5 rounded-full">Colombo 01-15</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-headline-lg text-primary font-semibold">Ready</span>
                <span className="text-body-sm text-on-surface-variant">Specimens acclimatized for home display</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-11/12" />
              </div>
              <p className="text-body-sm text-secondary pt-1 flex items-center gap-1">
                <Flower2 size={16} className="text-primary" />
                Pre-rooted in a well-draining potting mix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}