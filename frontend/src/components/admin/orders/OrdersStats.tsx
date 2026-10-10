import { CalendarClock, Truck, PackageCheck, TriangleAlert } from 'lucide-react'
import StatCard from '../StatCard'
import type { AdminOrder } from '../../../types/admin'
import { isoDate } from '../../../lib/dates'

export default function OrdersStats({ orders }: { orders: AdminOrder[] }) {
  const today = isoDate(0)
  const toDeliver = orders.filter(
    (o) => o.deliveryDate === today && ['PENDING', 'CONFIRMED', 'PREPARING'].includes(o.status)
  ).length
  const outNow = orders.filter((o) => o.status === 'OUT_FOR_DELIVERY').length
  const deliveredToday = orders.filter((o) => o.deliveryDate === today && o.status === 'DELIVERED').length
  const needsAttention = orders.filter((o) => o.status === 'PENDING' || o.status === 'PAYMENT_FAILED').length

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard title="To Prepare Today" icon={CalendarClock}>
        <div className="font-display text-headline-md text-primary">{toDeliver}</div>
        <p className="text-[11px] text-secondary mt-1">Due today, not yet out for delivery</p>
      </StatCard>
      <StatCard title="Out for Delivery" icon={Truck}>
        <div className="font-display text-headline-md text-primary">{outNow}</div>
        <p className="text-[11px] text-secondary mt-1">On the road right now</p>
      </StatCard>
      <StatCard title="Delivered Today" icon={PackageCheck}>
        <div className="font-display text-headline-md text-primary">{deliveredToday}</div>
        <p className="text-[11px] text-secondary mt-1">Completed hand-overs</p>
      </StatCard>
      <StatCard title="Needs Attention" icon={TriangleAlert} alert={needsAttention > 0}>
        <div className={`font-display text-headline-md ${needsAttention > 0 ? 'text-error' : 'text-primary'}`}>{needsAttention}</div>
        <p className="text-[11px] text-secondary mt-1">Pending confirmation or failed payment</p>
      </StatCard>
    </div>
  )
}