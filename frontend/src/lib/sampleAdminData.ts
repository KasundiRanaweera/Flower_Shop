import type { AdminOrder, DashboardStats, DateRange, DayOrders, LowStockItem, RecentCustomer } from '../types/admin'
import { isoDate } from './dates'

// TODO (Phase 8): replace everything in this file with real API calls, e.g.
//   GET /api/admin/stats?range=today|week|month
//   GET /api/admin/orders
//   GET /api/admin/products/low-stock
//   GET /api/admin/customers?limit=4

export const STATS_BY_RANGE: Record<DateRange, DashboardStats> = {
  today: { sales: 148600, salesChangePct: 12.4, onlinePaymentPct: 71, totalOrders: 28, pendingOrders: 4, inProgressOrders: 13, deliveredOrders: 11 },
  week: { sales: 842300, salesChangePct: 8.1, onlinePaymentPct: 73, totalOrders: 164, pendingOrders: 9, inProgressOrders: 31, deliveredOrders: 124 },
  month: { sales: 2845600, salesChangePct: 18.4, onlinePaymentPct: 74, totalOrders: 612, pendingOrders: 14, inProgressOrders: 38, deliveredOrders: 560 },
}

export const PRODUCT_COUNTS = { total: 64, available: 61, unavailable: 3 }

export const LOW_STOCK: LowStockItem[] = [
  { id: 'p1', name: 'Casablanca Pure Ivory Lilies', quantity: 3, threshold: 10 },
  { id: 'p2', name: 'Pastel Dawn Cottage Bunch', quantity: 4, threshold: 10 },
  { id: 'p3', name: 'Velvet Rose & Eucalyptus Petite', quantity: 2, threshold: 8 },
]

export const ORDERS_THIS_WEEK: DayOrders[] = [
  { day: 'Mon', orders: 18 },
  { day: 'Tue', orders: 22 },
  { day: 'Wed', orders: 19 },
  { day: 'Thu', orders: 26 },
  { day: 'Fri', orders: 31 },
  { day: 'Sat', orders: 38 },
  { day: 'Sun', orders: 10 },
]

export const RECENT_CUSTOMERS: RecentCustomer[] = [
  { id: 'c1', name: 'Amaya Fernando', email: 'amaya.f@example.com', joined: 'Joined 2 days ago', orders: 1 },
  { id: 'c2', name: 'Chamath Silva', email: 'chamath.s@example.com', joined: 'Joined 4 days ago', orders: 3 },
  { id: 'c3', name: 'Sithara Perera', email: 'sithara.p@example.com', joined: 'Joined last week', orders: 2 },
  { id: 'c4', name: 'Nadeesha Perera', email: 'nadeesha.p@example.com', joined: 'Joined last week', orders: 1 },
]

// Newest first. Delivery dates are relative to "today" so the Today / Tomorrow filters always have data.
export const ALL_ORDERS: AdminOrder[] = [
  {
    id: '1049', orderNumber: '#CP-1049', placedAt: 'Today, 10:20 AM',
    customerName: 'Hiruni Gunasekara', customerPhone: '94770000011',
    recipientName: 'Sachini Gunasekara', area: 'Dehiwala', deliveryDate: isoDate(5), deliverySlot: 'afternoon',
    itemsSummary: 'Artisan Truffles & Scarlet Bloom Hamper',
    total: 22500, paymentMethod: 'WHATSAPP', paymentStatus: 'PENDING', status: 'PENDING',
  },
  {
    id: '1048', orderNumber: '#CP-1048', placedAt: 'Today, 10:10 AM',
    customerName: 'Mahesh Rathnayake', customerPhone: '94770000010',
    recipientName: 'Dilini Rathnayake', area: 'Colombo 05', deliveryDate: isoDate(3), deliverySlot: 'evening',
    itemsSummary: 'The Colombo Velvet Grandeur', cardMessage: 'Happy 5th anniversary, my love',
    total: 32500, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'CONFIRMED',
  },
  {
    id: '1047', orderNumber: '#CP-1047', placedAt: 'Today, 10:02 AM',
    customerName: 'Ayesha Marikar', customerPhone: '94770000009',
    recipientName: 'Ayesha Marikar', area: 'Colombo 07', deliveryDate: isoDate(1), deliverySlot: 'morning',
    itemsSummary: 'Golden Orchid Cascade',
    total: 24000, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'CONFIRMED',
  },
  {
    id: '1046', orderNumber: '#CP-1046', placedAt: 'Today, 9:55 AM',
    customerName: 'Sanjeewa Mendis', customerPhone: '94770000013', isOverseas: true,
    recipientName: 'Ruwanthi Mendis', area: 'Mount Lavinia', deliveryDate: isoDate(0), deliverySlot: 'midnight',
    itemsSummary: 'Atelier Sweet Romance Chest', cardMessage: 'Happy 25th anniversary, love from Melbourne',
    total: 26000, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'CONFIRMED',
  },
  {
    id: '1045', orderNumber: '#CP-1045', placedAt: 'Today, 9:48 AM',
    customerName: 'Prasad Wickremasinghe', customerPhone: '94770000012',
    recipientName: 'Prasad Wickremasinghe', area: 'Colombo 03', deliveryDate: isoDate(0), deliverySlot: 'evening',
    itemsSummary: 'Velvet Bloom & Chocolate Box',
    total: 21500, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'CONFIRMED',
  },
  {
    id: '1044', orderNumber: '#CP-1044', placedAt: 'Today, 9:40 AM',
    customerName: 'Chathurika Samarasinghe', customerPhone: '94770000008',
    recipientName: 'Ramani Silva', area: 'Colombo 05', deliveryDate: isoDate(0), deliverySlot: 'evening',
    itemsSummary: 'Serenity Mountain Casablanca', cardMessage: 'With deepest sympathies',
    total: 21000, paymentMethod: 'CASH_ON_DELIVERY', paymentStatus: 'PENDING', status: 'PENDING',
  },
  {
    id: '1043', orderNumber: '#CP-1043', placedAt: 'Today, 9:30 AM',
    customerName: 'Kavindu Rajapaksa', customerPhone: '94770000007',
    recipientName: 'Nilmini Jayawardena', area: 'Rajagiriya', deliveryDate: isoDate(0), deliverySlot: 'evening',
    itemsSummary: 'Highland Blush Symphony',
    total: 15200, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'CONFIRMED',
  },
  {
    id: '1042', orderNumber: '#CP-1042', placedAt: 'Today, 9:14 AM',
    customerName: 'Kasundi Wickramasinghe', customerPhone: '94770000001',
    recipientName: 'Dr. Nihal', area: 'Colombo 10', deliveryDate: isoDate(0), deliverySlot: 'afternoon',
    itemsSummary: 'Royal Red Roses Box + Chocolates', cardMessage: 'Get well soon from the Surgery team',
    total: 17150, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'PREPARING',
  },
  {
    id: '1041', orderNumber: '#CP-1041', placedAt: 'Today, 8:30 AM',
    customerName: 'Dilshan Silva', customerPhone: '94770000002', isOverseas: true,
    recipientName: 'Anula Silva', area: 'Nugegoda', deliveryDate: isoDate(0), deliverySlot: 'morning',
    itemsSummary: 'Pastel Bloom Symphony', cardMessage: 'Happy 70th Amma, love from London',
    total: 12800, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'OUT_FOR_DELIVERY',
  },
  {
    id: '1040', orderNumber: '#CP-1040', placedAt: 'Today, 8:05 AM',
    customerName: 'Shehan Fernando', customerPhone: '94770000003',
    recipientName: 'Shehan Fernando', area: 'Colombo 03', deliveryDate: isoDate(0), deliverySlot: 'morning',
    itemsSummary: 'Golden Orchid & Tea Crate', cardMessage: 'Happy Anniversary Sweetheart',
    total: 24500, paymentMethod: 'WHATSAPP', paymentStatus: 'PAID', status: 'DELIVERED',
  },
  {
    id: '1039', orderNumber: '#CP-1039', placedAt: 'Today, 7:45 AM',
    customerName: 'Tharindu Wijesekara', customerPhone: '94770000004',
    recipientName: 'Tharindu Wijesekara', area: 'Colombo 07', deliveryDate: isoDate(0), deliverySlot: 'afternoon',
    itemsSummary: 'Casablanca Lily Luxury Cylinder',
    total: 19500, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'CONFIRMED',
  },
  {
    id: '1038', orderNumber: '#CP-1038', placedAt: 'Yesterday, 5:20 PM',
    customerName: 'Nadeesha Perera', customerPhone: '94770000005',
    recipientName: 'Kamani Perera', area: 'Kandy', deliveryDate: isoDate(1), deliverySlot: 'afternoon',
    itemsSummary: 'Sunburst Morning Jubilee',
    total: 16800, paymentMethod: 'CASH_ON_DELIVERY', paymentStatus: 'PENDING', status: 'PENDING',
  },
  {
    id: '1037', orderNumber: '#CP-1037', placedAt: 'Yesterday, 3:10 PM',
    customerName: 'Ruwan Jayasinghe', customerPhone: '94770000006',
    recipientName: 'Ruwan Jayasinghe', area: 'Galle', deliveryDate: isoDate(1), deliverySlot: 'morning',
    itemsSummary: 'Velvet Rose & Eucalyptus Petite',
    total: 9500, paymentMethod: 'CARD', paymentStatus: 'FAILED', status: 'PAYMENT_FAILED',
  },
  {
    id: '1036', orderNumber: '#CP-1036', placedAt: '2 days ago',
    customerName: 'Tharushi Alwis', customerPhone: '94770000014',
    recipientName: 'Tharushi Alwis', area: 'Galle', deliveryDate: isoDate(-2), deliverySlot: 'morning',
    itemsSummary: 'Pastel Dawn Cottage Bunch',
    total: 13800, paymentMethod: 'CARD', paymentStatus: 'PAID', status: 'DELIVERED',
  },
  {
    id: '1035', orderNumber: '#CP-1035', placedAt: '3 days ago',
    customerName: 'Roshan Peiris', customerPhone: '94770000015',
    recipientName: 'Mala Peiris', area: 'Colombo 08', deliveryDate: isoDate(-3), deliverySlot: 'afternoon',
    itemsSummary: 'Casablanca Pure Ivory Lilies',
    total: 19800, paymentMethod: 'CARD', paymentStatus: 'REFUNDED', status: 'CANCELLED',
  },
]

// The Overview dashboard shows the 6 newest orders.
export const RECENT_ORDERS: AdminOrder[] = ALL_ORDERS.slice(0, 6)