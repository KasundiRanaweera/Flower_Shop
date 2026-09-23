// Central place that builds WhatsApp click-to-chat links.
// TODO (Phase 6): replace WHATSAPP_NUMBER with the number from ShopSettings via the API,
// instead of a hardcoded value, per the project brief's requirement.
const WHATSAPP_NUMBER = '94771234567'

export function buildWhatsAppLink(message: string, number: string = WHATSAPP_NUMBER): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}
