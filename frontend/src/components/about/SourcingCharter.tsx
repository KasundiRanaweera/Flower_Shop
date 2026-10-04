import { Handshake, Wallet, Leaf } from 'lucide-react'

export default function SourcingCharter() {
  return (
    <section className="w-full pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="bg-surface-container-high rounded-xl p-8 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-tertiary">
                <Handshake size={20} />
                <span className="text-[11px] uppercase tracking-widest">Our Sourcing Commitment</span>
              </div>
              <h3 className="font-display text-headline-md text-primary">
                Supporting the Growers Behind Every Stem
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                We try to buy directly from small growers and cooperatives in the highlands
                rather than going through multiple brokers. It means fresher flowers for you,
                and fairer, more direct payment for the people who grow them.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-secondary uppercase">Direct Sourcing</span>
                  <p className="text-title-md text-primary">Fewer Middlemen</p>
                </div>
                <Wallet size={28} className="text-primary" />
              </div>
              <div className="p-4 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-secondary uppercase">Growing Practices</span>
                  <p className="text-title-md text-primary">Low-Impact Methods</p>
                </div>
                <Leaf size={28} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}