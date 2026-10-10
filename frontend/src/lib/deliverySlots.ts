import type { DeliverySlotKey } from '../types/admin'

// TODO (Phase 8): load these from the DeliverySlot table (GET /api/delivery-slots)
// so the owner can edit them in Settings. Keep these keys in sync with that table.
export const DELIVERY_SLOTS: { key: DeliverySlotKey; label: string; hours: string }[] = [
  { key: 'morning', label: 'Morning', hours: '9:00 AM – 1:00 PM' },
  { key: 'afternoon', label: 'Afternoon', hours: '2:00 PM – 6:00 PM' },
  { key: 'evening', label: 'Evening', hours: '6:00 PM – 9:00 PM' },
  { key: 'midnight', label: 'Midnight Surprise', hours: '11:45 PM – 12:15 AM' },
]

export const SLOT_LABEL: Record<DeliverySlotKey, string> = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
  midnight: 'Midnight Surprise',
}