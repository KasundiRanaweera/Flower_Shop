import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '../../lib/whatsapp'

export default function WhatsAppButton() {
  const link = buildWhatsAppLink('Hello Ceylon Blooms Concierge, I would like to order bespoke blooms')

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <div className="hidden md:flex items-center bg-surface-container-lowest text-on-surface shadow-[0_12px_32px_-4px_rgba(26,58,47,0.12)] px-4 py-2 rounded-full text-body-sm">
        <span className="w-2 h-2 rounded-full bg-tertiary-container mr-2 animate-pulse" />
        Chat with Floral Concierge
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Floral Concierge on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-4px_rgba(26,58,47,0.25)] hover:scale-105 transition-transform"
      >
        <MessageCircle size={28} />
      </a>
    </aside>
  )
}
