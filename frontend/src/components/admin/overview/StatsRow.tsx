import { Link } from 'react-router-dom'
import { Banknote, ClipboardList, Package, TriangleAlert, ArrowUp, ArrowDown } from 'lucide-react'
import StatCard from '../StatCard'
import { formatLKR } from '../../../lib/format'
import { LOW_STOCK, PRODUCT_COUNTS, STATS_BY_RANGE } from '../../../lib/sampleAdminData'
import type { DateRange } from '../../../types/admin'

const RANGE_LABEL: Record<DateRange, { title: string; compare: string }> = {
  today: { title: 'Sales Today', compare: 'vs yesterday' },
  week: { title: 'Sales This Week', compare: 'vs last week' },
  month: { title: 'Sales This Month', compare: 'vs last month' },
}

export default function StatsRow({ range }: { range: DateRange }) {
  const stats = STATS_BY_RANGE[range]
  const label = RANGE_LABEL[range]
  const isUp = stats.salesChangePct >= 0
  const pct = (n: number) => `${(n / stats.totalOrders) * 100}%`

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        title={label.title}
        icon={Banknote}
        footer={
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-secondary">
              <span>Online card: {stats.onlinePaymentPct}%</span>
              <span>Cash / WhatsApp: {100 - stats.onlinePaymentPct}%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${stats.onlinePaymentPct}%` }} />
            </div>
          </div>
        }
      >
        <div className="font-display text-headline-md text-primary">{formatLKR(stats.sales)}</div>
        <div className={`mt-1 inline-flex items-center gap-1 text-label-md ${isUp ? 'text-emerald-700' : 'text-error'}`}>
          {isUp ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          <span>{Math.abs(stats.salesChangePct)}%</span>
          <span className="text-secondary font-normal">{label.compare}</span>
        </div>
      </StatCard>

      <StatCard
        title="Orders"
        icon={ClipboardList}
        footer={
          <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-surface-container">
            <div className="bg-tertiary-container" style={{ width: pct(stats.pendingOrders) }} />
            <div className="bg-primary-fixed-dim" style={{ width: pct(stats.inProgressOrders) }} />
            <div className="bg-primary" style={{ width: pct(stats.deliveredOrders) }} />
          </div>
        }
      >
        <div className="font-display text-headline-md text-primary">{stats.totalOrders} Orders</div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-secondary">
          <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary-container" />{stats.pendingOrders} Pending</span>
          <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary-fixed-dim" />{stats.inProgressOrders} In progress</span>
          <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" />{stats.deliveredOrders} Delivered</span>
        </div>
      </StatCard>

      <StatCard
        title="Products"
        icon={Package}
        footer={
          <Link to="/admin/products" className="text-label-md text-primary hover:underline">
            Manage products
          </Link>
        }
      >
        <div className="font-display text-headline-md text-primary">{PRODUCT_COUNTS.total} Products</div>
        <div className="mt-1 text-[11px] text-secondary">
          {PRODUCT_COUNTS.available} available • {PRODUCT_COUNTS.unavailable} unavailable
        </div>
      </StatCard>

      <StatCard
        title="Low Stock"
        icon={TriangleAlert}
        alert
        footer={
          <Link to="/admin/inventory" className="text-label-md text-primary hover:underline">
            Review stock
          </Link>
        }
      >
        <div className="font-display text-headline-md text-error">{LOW_STOCK.length} Items</div>
        <div className="mt-1 text-[11px] text-secondary truncate">
          {LOW_STOCK.map((item) => item.name).join(', ')}
        </div>
      </StatCard>
    </div>
  )
}