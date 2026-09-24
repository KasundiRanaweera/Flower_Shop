import { MessageCircle, Phone } from 'lucide-react'
import { buildWhatsAppLink } from '../../lib/whatsapp'

export default function ConsultationCTA() {
  const link = buildWhatsAppLink("Hello, I'd like help choosing flowers for a special occasion")

  return (
    <section className="w-full px-4 lg:px-12 py-14 bg-surface">
      <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-2xl p-8 lg:p-12 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-1">
            <span className="text-[11px] text-secondary uppercase tracking-widest block">Can't find what you're looking for?</span>
            <h2 className="font-display text-headline-lg-mobile lg:text-headline-lg text-primary">
              Speak with One of Our Florists
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              Need a large arrangement, a custom colour palette, or same-day delivery to a loved one
              in Colombo? Our team is on standby via WhatsApp or phone.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1EBE5D] px-4 py-3 rounded-lg text-title-md flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
            >
              <MessageCircle size={24} />
              Chat via WhatsApp
            </a>
            {/* TODO: pull phone number from ShopSettings once Phase 6 wires it up */}
            <button className="bg-surface-container hover:bg-surface-container-high text-primary px-4 py-3 rounded-lg text-title-md flex items-center justify-center gap-2 transition-colors">
              <Phone size={20} />
              Call Salon: +94 11 234 5678
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}