import { BadgeCheck, PenLine, Clock } from 'lucide-react'

const STEPS = [
  {
    number: 1,
    title: 'Choose Fresh Blooms',
    description: 'Select from seasonal roses, lilies, orchids, and celebration hampers prepared fresh every morning.',
    icon: BadgeCheck,
    footer: 'Freshness guaranteed',
  },
  {
    number: 2,
    title: 'Add a Personal Message',
    description: 'Include a handwritten note or a short card message to make every arrangement feel personal and thoughtful.',
    icon: PenLine,
    footer: 'Free custom gift note',
  },
  {
    number: 3,
    title: 'Pick Your Delivery Time',
    description: 'Choose a convenient delivery time for your occasion and enjoy updates from our team until your order arrives.',
    icon: Clock,
    footer: 'Live delivery updates',
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full pb-14 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] text-tertiary uppercase tracking-widest block mb-1">
            Simple Luxury Ordering
          </span>
          <h2 className="font-display text-headline-lg text-primary">How Ceylon Blooms Delivers Joy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS.map(({ number, title, description, icon: Icon, footer }) => (
            <div key={number} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary text-on-primary font-display text-headline-sm flex items-center justify-center mb-4">
                {number}
              </div>
              <h3 className="font-display text-headline-sm text-primary mb-2">{title}</h3>
              <p className="text-body-sm text-secondary leading-relaxed">{description}</p>
              <div className="mt-4 pt-2 flex items-center gap-2 text-tertiary text-xs font-semibold">
                <Icon size={18} /> {footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
