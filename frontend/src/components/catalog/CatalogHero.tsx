import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, Leaf, Clock } from 'lucide-react'

interface CatalogHeroProps {
  title: string
  subtitle: string
  breadcrumbLabel: string
  badge: string
  pills: { label: string; count: number }[]
}

// Order-cutoff countdown — counts down to 2:00 PM local time, resets to tomorrow once passed.
// This is a genuinely useful, general e-commerce feature (not tied to any one shop's story).
function useCountdownTo2PM() {
  const [label, setLabel] = useState('')

  useEffect(() => {
    function update() {
      const now = new Date()
      const target = new Date()
      target.setHours(14, 0, 0, 0)
      if (now.getTime() > target.getTime()) {
        target.setDate(target.getDate() + 1)
      }
      const diff = target.getTime() - now.getTime()
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / 1000 / 60) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setLabel(
        `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s left`
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return label
}

export default function CatalogHero({ title, subtitle, breadcrumbLabel, badge, pills }: CatalogHeroProps) {
  const countdown = useCountdownTo2PM()

  return (
    <>
      {/* Breadcrumb + freshness status bar */}
      <section className="w-full bg-surface-container-lowest/80 px-4 lg:px-12 py-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-secondary">
          <nav className="flex items-center gap-2 text-label-md">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home size={16} />
              Home
            </Link>
            <ChevronRight size={14} className="text-outline-variant" />
            <span className="text-primary font-bold">{breadcrumbLabel}</span>
          </nav>
          <div className="flex items-center gap-4 text-[11px] text-on-surface-variant">
            <span className="inline-flex items-center gap-1.5 bg-secondary-container/60 text-on-secondary-container px-3 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Fresh stems delivered from our highland growers this morning
            </span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="w-full bg-surface-container-low px-4 lg:px-12 pt-8 pb-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 bg-primary text-on-primary px-3 py-1 rounded-full text-[11px] tracking-widest uppercase shadow-sm">
                <Leaf size={15} className="text-tertiary-fixed" />
                {badge}
              </div>
              <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-primary tracking-tight leading-none">
                {title}
              </h1>
              <p className="text-body-md lg:text-body-lg text-secondary max-w-3xl leading-relaxed pt-1">
                {subtitle}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-md space-y-2 w-full sm:w-auto">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] text-secondary uppercase tracking-wider">Colombo Delivery Cut-Off</span>
                  <span className="bg-error text-on-error text-[11px] px-2 py-0.5 rounded-full font-bold">2:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Clock size={28} />
                  <div>
                    <p className="text-title-md leading-none text-primary">{countdown}</p>
                    <p className="text-body-sm text-secondary">For guaranteed same-day handover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-8 pb-1">
            {pills.map((pill, i) => (
              <button
                key={pill.label}
                className={
                  i === 0
                    ? 'bg-primary text-on-primary text-label-md px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap flex items-center gap-1.5 transition-transform hover:scale-95'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high text-label-md px-4 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-colors'
                }
              >
                <span>{pill.label}</span>
                <span className={i === 0 ? 'bg-on-primary/20 text-on-primary text-[11px] px-1.5 py-0.5 rounded-full' : 'text-secondary text-[11px]'}>
                  {pill.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}