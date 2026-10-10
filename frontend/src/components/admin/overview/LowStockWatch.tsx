import { Link } from 'react-router-dom'
import { LOW_STOCK } from '../../../lib/sampleAdminData'

export default function LowStockWatch() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-4 space-y-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-headline-sm text-primary">Low Stock Watch</h3>
        <span className="text-[11px] text-secondary">{LOW_STOCK.length} items</span>
      </div>

      <div className="space-y-4">
        {LOW_STOCK.map((item) => {
          const pct = Math.min(100, (item.quantity / item.threshold) * 100)
          const critical = pct <= 30
          return (
            <div key={item.id}>
              <div className="flex justify-between text-body-sm mb-1">
                <span className="text-on-surface">{item.name}</span>
                <span className={critical ? 'text-error font-semibold' : 'text-secondary'}>
                  {item.quantity} left
                </span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${critical ? 'bg-error' : 'bg-primary'}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          )
        })}
      </div>

      <Link to="/admin/inventory" className="inline-block text-label-md text-primary hover:underline">
        Manage stock
      </Link>
    </div>
  )
}