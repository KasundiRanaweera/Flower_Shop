import type { OrderStatus } from '../../../types/admin'
import { OWNER_STATUSES, ORDER_STATUS_LABEL, ORDER_STATUS_STYLE } from '../../../lib/orderStatus'

interface OrderStatusSelectProps {
  status: OrderStatus
  orderNumber: string
  onChange: (status: OrderStatus) => void
}

// A dropdown that looks like a coloured status badge.
export default function OrderStatusSelect({ status, orderNumber, onChange }: OrderStatusSelectProps) {
  // If an order already has a status the owner can't pick (e.g. Payment Failed), still show it.
  const options = OWNER_STATUSES.includes(status) ? OWNER_STATUSES : [status, ...OWNER_STATUSES]

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value as OrderStatus)}
      aria-label={`Status for order ${orderNumber}`}
      className={`text-label-md rounded-lg px-2 py-1.5 border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary ${ORDER_STATUS_STYLE[status]}`}
    >
      {options.map((s) => (
        <option key={s} value={s}>{ORDER_STATUS_LABEL[s]}</option>
      ))}
    </select>
  )
}