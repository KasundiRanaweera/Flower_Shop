import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Receipt, MessageCircle, MapPin } from 'lucide-react'
import type { AdminOrder, OrderStatus } from '../../../types/admin'
import {
  ORDER_STATUSES,
  ORDER_STATUS_LABEL,
  ORDER_STATUS_STYLE,
  PAYMENT_METHOD_LABEL,
  PAYMENT_STATUS_LABEL,
  PAYMENT_STATUS_STYLE,
} from '../../../lib/orderStatus'
import { formatLKR } from '../../../lib/format'
import { buildWhatsAppLink } from '../../../lib/whatsapp'

type Tab = 'ALL' | OrderStatus

const TABS: { id: Tab; label: string }[] = [
  { id: 'ALL', label: 'All Orders' },
  { id: 'PENDING', label: 'Pending' },
  { id: 'CONFIRMED', label: 'Confirmed' },
  { id: 'PREPARING', label: 'Preparing' },
  { id: 'OUT_FOR_DELIVERY', label: 'Out for Delivery' },
  { id: 'DELIVERED', label: 'Delivered' },
]

export default function RecentOrdersTable({ initialOrders }: { initialOrders: AdminOrder[] }) {
  const [orders, setOrders] = useState(initialOrders)
  const [tab, setTab] = useState<Tab>('ALL')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const result: Record<string, number> = { ALL: orders.length }
    for (const o of orders) result[o.status] = (result[o.status] ?? 0) + 1
    return result
  }, [orders])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return orders.filter((o) => {
      if (tab !== 'ALL' && o.status !== tab) return false
      if (!q) return true
      return [o.orderNumber, o.customerName, o.recipientName, o.area].some((v) => v.toLowerCase().includes(q))
    })
  }, [orders, tab, query])

  function changeStatus(id: string, status: OrderStatus) {
    // TODO (Phase 5): PATCH /api/admin/orders/:id/status, then update from the response.
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)))
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col gap-3 border-b border-surface-container">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-headline-sm text-primary">Recent Orders</h2>
          <div className="relative w-full max-w-xs">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search orders..."
              aria-label="Search orders"
              className="w-full bg-surface-container-low rounded-lg py-2 pl-9 pr-3 text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`px-3 py-1 rounded-full text-label-md whitespace-nowrap transition-colors ${
                tab === t.id
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {t.label} ({counts[t.id] ?? 0})
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[860px]">
          <thead>
            <tr className="bg-surface-container-low text-[11px] uppercase tracking-wider text-secondary">
              <th className="px-4 py-3 font-semibold">Order</th>
              <th className="px-4 py-3 font-semibold">Customer &amp; Delivery</th>
              <th className="px-4 py-3 font-semibold">Items</th>
              <th className="px-4 py-3 font-semibold">Amount &amp; Payment</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {filtered.map((order) => (
              <tr key={order.id} className="hover:bg-surface-container-low/50 transition-colors align-top">
                <td className="px-4 py-3">
                  <span className="block text-title-md text-primary">{order.orderNumber}</span>
                  <span className="block text-[11px] text-secondary">{order.placedAt}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="text-title-md text-on-surface">
                    {order.customerName}
                    {order.isOverseas && <span className="ml-2 text-[11px] text-secondary font-normal">(Overseas)</span>}
                  </div>
                  <div className="mt-0.5 flex items-start gap-1 text-body-sm text-secondary">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>Recipient: {order.recipientName}, {order.area}</span>
                  </div>
                </td>
                <td className="px-4 py-3 max-w-[220px]">
                  <span className="block text-body-sm text-on-surface">{order.itemsSummary}</span>
                  {order.cardMessage && (
                    <span className="block text-[11px] text-secondary italic mt-0.5">“{order.cardMessage}”</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="text-currency-md text-primary">{formatLKR(order.total)}</div>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      {PAYMENT_METHOD_LABEL[order.paymentMethod]}
                    </span>
                    <span className={`text-[11px] px-2 py-0.5 rounded font-semibold ${PAYMENT_STATUS_STYLE[order.paymentStatus]}`}>
                      {PAYMENT_STATUS_LABEL[order.paymentStatus]}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={order.status}
                    onChange={(e) => changeStatus(order.id, e.target.value as OrderStatus)}
                    aria-label={`Status for order ${order.orderNumber}`}
                    className={`text-label-md rounded-lg px-2 py-1.5 border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary ${ORDER_STATUS_STYLE[order.status]}`}
                  >
                    {ORDER_STATUSES.map((s) => (
                      <option key={s} value={s}>{ORDER_STATUS_LABEL[s]}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/admin/orders/${order.id}`}
                      title="View order details"
                      aria-label={`View order ${order.orderNumber}`}
                      className="w-8 h-8 rounded-lg bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary flex items-center justify-center transition-colors"
                    >
                      <Receipt size={16} />
                    </Link>
                    <a
                      href={buildWhatsAppLink(
                        `Hello ${order.customerName}, this is Ceylon Petals regarding your order ${order.orderNumber}.`,
                        order.customerPhone
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Message customer on WhatsApp"
                      aria-label={`WhatsApp ${order.customerName}`}
                      className="w-8 h-8 rounded-lg bg-surface-container-low text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                    >
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-body-sm text-secondary py-10">No orders match this filter.</p>
        )}
      </div>

      <div className="p-4 flex items-center justify-between border-t border-surface-container text-body-sm text-secondary">
        <span>Showing {filtered.length} of {orders.length} recent orders</span>
        <Link to="/admin/orders" className="text-label-md text-primary hover:underline">View all orders</Link>
      </div>
    </div>
  )
}