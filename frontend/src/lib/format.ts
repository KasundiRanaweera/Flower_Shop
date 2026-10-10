// Shared formatting helpers.

export function formatLKR(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-LK')}`
}