// Types used by the owner (admin) pages.
// OrderStatus / PaymentMethod / PaymentStatus mirror the enums in backend/prisma/schema.prisma,
// so the frontend and database always use the same values.

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PREPARING'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'PAYMENT_FAILED'

export type PaymentMethod = 'CARD' | 'CASH_ON_DELIVERY' | 'WHATSAPP'
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
export type DateRange = 'today' | 'week' | 'month'
export type DeliverySlotKey = 'morning' | 'afternoon' | 'evening' | 'midnight'

export interface AdminOrder {
  id: string
  orderNumber: string
  placedAt: string
  customerName: string
  customerPhone: string
  isOverseas?: boolean
  recipientName: string
  area: string
  deliveryDate: string
  deliverySlot: DeliverySlotKey
  itemsSummary: string
  cardMessage?: string
  total: number
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  status: OrderStatus
}

export interface DashboardStats {
  sales: number
  salesChangePct: number
  onlinePaymentPct: number
  totalOrders: number
  pendingOrders: number
  inProgressOrders: number
  deliveredOrders: number
}

export interface LowStockItem {
  id: string
  name: string
  quantity: number
  threshold: number
}

export interface RecentCustomer {
  id: string
  name: string
  email: string
  joined: string
  orders: number
}

export interface DayOrders {
  day: string
  orders: number
}