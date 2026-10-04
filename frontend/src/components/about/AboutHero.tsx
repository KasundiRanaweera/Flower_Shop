import { Sprout, Mountain, Snowflake, Users } from 'lucide-react'

const METRICS = [
  { icon: Mountain, label: 'HIGHLAND GROWN', value: 'Cool Central Hills' },
  { icon: Snowflake, label: 'CAREFUL HANDLING', value: 'Temperature-Conscious Transit' },
  { icon: Users, label: 'DIRECT RELATIONSHIPS', value: 'Working With Local Growers' },
]

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfEZqb2rdYT4qfGPZRsWQ5iDVPOIlF_jALfnqg4VwbWA_oB2uthdliMNCr6QA7mOdmlhfCl6Bdn8_5Ex6HiNw6xY0oQthmh9EYZl9gQoshKe-qiajs3OrkhO1x2EBkPjdW40m5LMljcSANV3Jk89CnVgTdykF_tbsXw31IFUDgC_RnW5jaN5Sbn8W5q3pQgwb7DKtP6KjJ3lepFLuHYc6e2mosvAcj7a3omEE7paKtMEuexyGOjNOAJA')",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-12 pt-20 pb-28">
        <div className="flex flex-col max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface/10 backdrop-blur-md w-fit">
            <Sprout size={16} className="text-tertiary-fixed" />
            <span className="text-[11px] text-surface tracking-widest uppercase">The Story of Ceylon Petals</span>
          </div>
          <h1 className="font-display text-display-lg text-on-primary leading-tight font-light tracking-tight">
            From Misty Highlands to the <span className="italic font-normal text-secondary-fixed">Great Rooms</span> of Sri Lanka
          </h1>
          <p className="text-body-lg text-surface-variant max-w-2xl leading-relaxed">
            Ceylon Petals began in Colombo with a simple idea: bring the cool-climate flowers of
            Sri Lanka's central highlands to the island's doorsteps, arranged with the same care
            they were grown with.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            {METRICS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface/10 backdrop-blur-md shadow-sm">
                <Icon size={22} className="text-tertiary-fixed" />
                <div>
                  <p className="text-[11px] text-tertiary-fixed">{label}</p>
                  <p className="text-body-sm text-surface">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}