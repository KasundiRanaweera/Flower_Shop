export interface Category {
  id: string
  name: string
  slug: string
  imageUrl: string
  styleCount: number
  fromPrice: number
}

export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  discountPrice?: number
  badge?: string
  secondaryBadge?: string
  tags: string[]
  note: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  message: string
  orderedItem: string
  initials: string
}

export interface CatalogProduct {
  id: string
  name: string
  series: string
  description: string
  imageUrl: string
  price: number
  oldPrice?: number
  stemsLabel: string
  badge?: string
  note: string
  noteTone?: 'positive' | 'neutral'
  featured?: boolean
}