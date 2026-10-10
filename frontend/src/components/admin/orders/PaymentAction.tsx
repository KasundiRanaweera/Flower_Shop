import { HandCoins, Undo2 } from 'lucide-react'
import type { AdminOrder, PaymentStatus } from '../../../types/admin'

interface PaymentActionProps {
  order: AdminOrder
  onPaymentChange?: (order: AdminOrder, status: PaymentStatus) => void
}

// Two real owner tasks:
//  - Cash on Delivery / WhatsApp orders are unpaid until the owner collects the money -> "Mark as paid".
//  - A cancelled order that was paid needs refunding by hand -> "Mark as refunded".
// Card payments are updated automatically by the PayHere callback, so they never show a button.
export default function PaymentAction({ order, onPaymentChange }: PaymentActionProps) {
  if (!onPaymentChange) return null

  const canMarkPaid = order.paymentMethod !== 'CARD' && order.paymentStatus === 'PENDING' && order.status !== 'CANCELLED'
  const canMarkRefunded = order.status === 'CANCELLED' && order.paymentStatus === 'PAID'

  if (canMarkPaid) {
    return (
      <button
        type="button"
        onClick={() => onPaymentChange(order, 'PAID')}
        className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-surface-container-low hover:bg-primary hover:text-on-primary px-2 py-1 rounded transition-colors"
      >
        <HandCoins size={14} /> Mark as paid
      </button>
    )
  }

  if (canMarkRefunded) {
    return (
      <button
        type="button"
        onClick={() => onPaymentChange(order, 'REFUNDED')}
        className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-surface-container-low hover:bg-primary hover:text-on-primary px-2 py-1 rounded transition-colors"
      >
        <Undo2 size={14} /> Mark as refunded
      </button>
    )
  }

  return null
}