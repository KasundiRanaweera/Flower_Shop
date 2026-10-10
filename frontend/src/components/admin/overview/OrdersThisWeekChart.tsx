import { ORDERS_THIS_WEEK } from '../../../lib/sampleAdminData'

export default function OrdersThisWeekChart() {
  const max = Math.max(...ORDERS_THIS_WEEK.map((d) => d.orders))
  const peak = ORDERS_THIS_WEEK.find((d) => d.orders === max)

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-4 space-y-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-headline-sm text-primary">Orders This Week</h3>
        {peak && <span className="text-[11px] text-secondary">Busiest: {peak.day}</span>}
      </div>

      <div className="h-32 flex items-end gap-2" role="img" aria-label="Bar chart of orders per day this week">
        {ORDERS_THIS_WEEK.map((d) => {
          const isPeak = d.orders === max
          return (
            <div key={d.day} className="flex-1 h-full flex items-end">
              <div
                className={`relative w-full rounded-t transition-all ${isPeak ? 'bg-primary' : 'bg-primary-fixed-dim'}`}
                style={{ height: `${(d.orders / max) * 100}%` }}
                title={`${d.day}: ${d.orders} orders`}
              >
                {isPeak && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-on-primary px-1.5 py-0.5 rounded whitespace-nowrap">
                    {d.orders}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex gap-2">
        {ORDERS_THIS_WEEK.map((d) => (
          <span key={d.day} className="flex-1 text-center text-[11px] text-secondary">{d.day}</span>
        ))}
      </div>
    </div>
  )
}