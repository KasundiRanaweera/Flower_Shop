import type { OrderStatus, PaymentMethod, PaymentStatus } from '../types/admin'

// Single source of truth for how order / payment statuses look and read in the admin.

export const ORDER_STATUSES: OrderStatus[] = [
  'PENDING',
  'CONFIRMED',
  'PREPARING',
  'OUT_FOR_DELIVERY',
  'DELIVERED',
  'CANCELLED',
  'PAYMENT_FAILED',
]

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  PREPARING: 'Preparing',
  OUT_FOR_DELIVERY: 'Out for Delivery',
  DELIVERED: 'Delivered',
  CANCELLED: 'Cancelled',
  PAYMENT_FAILED: 'Payment Failed',
}

export const ORDER_STATUS_STYLE: Record<OrderStatus, string> = {
  PENDING: 'bg-tertiary-fixed text-on-tertiary-fixed',
  CONFIRMED: 'bg-primary-fixed text-on-primary-fixed',
  PREPARING: 'bg-secondary-container text-on-secondary-container',
  OUT_FOR_DELIVERY: 'bg-primary-container text-on-primary',
  DELIVERED: 'bg-emerald-100 text-emerald-800',
  CANCELLED: 'bg-surface-container-high text-on-surface-variant',
  PAYMENT_FAILED: 'bg-error-container text-on-error-container',
}

export const PAYMENT_METHOD_LABEL: Record<PaymentMethod, string> = {
  CARD: 'Card (PayHere)',
  CASH_ON_DELIVERY: 'Cash on Delivery',
  WHATSAPP: 'WhatsApp Order',
}

export const PAYMENT_STATUS_LABEL: Record<PaymentStatus, string> = {
  PENDING: 'Unpaid',
  PAID: 'Paid',
  FAILED: 'Failed',
  REFUNDED: 'Refunded',
}

export const PAYMENT_STATUS_STYLE: Record<PaymentStatus, string> = {
  PENDING: 'bg-tertiary-fixed text-on-tertiary-fixed',
  PAID: 'bg-emerald-100 text-emerald-800',
  FAILED: 'bg-error-container text-on-error-container',
  REFUNDED: 'bg-surface-container-high text-on-surface-variant',
}

// Statuses the owner can choose by hand. "Payment Failed" is set automatically by the
// payment gateway callback, so it is not offered here (it still displays if an order has it).
export const OWNER_STATUSES: OrderStatus[] = [
  'PENDING',
  'CONFIRMED',
  'PREPARING',
  'OUT_FOR_DELIVERY',
  'DELIVERED',
  'CANCELLED',
]

// The usual next step in the order lifecycle, used by the one-click "Mark as ..." buttons.
export const NEXT_STATUS: Partial<Record<OrderStatus, OrderStatus>> = {
  PENDING: 'CONFIRMED',
  CONFIRMED: 'PREPARING',
  PREPARING: 'OUT_FOR_DELIVERY',
  OUT_FOR_DELIVERY: 'DELIVERED',
}