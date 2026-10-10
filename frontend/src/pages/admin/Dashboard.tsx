import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, TriangleAlert } from 'lucide-react'
import StatsRow from '../../components/admin/overview/StatsRow'
import RecentOrdersTable from '../../components/admin/overview/RecentOrdersTable'
import OrdersThisWeekChart from '../../components/admin/overview/OrdersThisWeekChart'
import LowStockWatch from '../../components/admin/overview/LowStockWatch'
import RecentCustomers from '../../components/admin/overview/RecentCustomers'
import { LOW_STOCK, RECENT_ORDERS } from '../../lib/sampleAdminData'
import type { DateRange } from '../../types/admin'

const RANGES: { id: DateRange; label: string }[] = [
  { id: 'today', label: 'Today' },
  { id: 'week', label: 'This Week' },
  { id: 'month', label: 'This Month' },
]

export default function Dashboard() {
  const [range, setRange] = useState<DateRange>('month')

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {LOW_STOCK.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 bg-error-container/60 text-on-error-container rounded-lg px-4 py-2 text-body-sm">
          <span className="inline-flex items-center gap-2 font-medium">
            <TriangleAlert size={16} />
            {LOW_STOCK.length} products are running low on stock.
          </span>
          <Link to="/admin/inventory" className="underline hover:no-underline">Review stock</Link>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] text-secondary tracking-widest uppercase block mb-1">Shop Overview</span>
          <h1 className="font-display text-headline-lg text-primary tracking-tight">Welcome back</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-surface-container rounded-lg p-0.5" role="tablist" aria-label="Date range">
            {RANGES.map((r) => (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={range === r.id}
                onClick={() => setRange(r.id)}
                className={`px-3 py-1 rounded text-label-md transition-all ${
                  range === r.id ? 'bg-surface-container-lowest text-primary font-bold shadow-sm' : 'text-secondary hover:text-on-surface'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
          <Link
            to="/admin/products/new"
            className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg text-label-md hover:bg-primary-container transition-all shadow-sm"
          >
            <Plus size={18} />
            <span>Add Product</span>
          </Link>
        </div>
      </div>

      <StatsRow range={range} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        <div className="xl:col-span-2">
          <RecentOrdersTable initialOrders={RECENT_ORDERS} />
        </div>
        <div className="space-y-6">
          <OrdersThisWeekChart />
          <LowStockWatch />
          <RecentCustomers />
        </div>
      </div>
    </div>
  )
}