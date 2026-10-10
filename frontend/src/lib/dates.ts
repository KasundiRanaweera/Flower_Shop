// Small date helpers. Dates are stored as 'YYYY-MM-DD' strings so they sort and compare easily.

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function isoDate(offsetDays = 0): string {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function formatDeliveryDate(iso: string): string {
  if (iso === isoDate(0)) return 'Today'
  if (iso === isoDate(1)) return 'Tomorrow'
  if (iso === isoDate(-1)) return 'Yesterday'
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}