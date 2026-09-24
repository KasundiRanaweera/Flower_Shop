import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CatalogHero from '../components/catalog/CatalogHero'
import FilterBar from '../components/catalog/FilterBar'
import FilterSidebar from '../components/catalog/FilterSidebar'
import ProductGrid, { FRESH_BOUQUETS } from '../components/catalog/ProductGrid'
import Pagination from '../components/catalog/Pagination'
import FreshnessPromise from '../components/catalog/FreshnessPromise'
import ConsultationCTA from '../components/catalog/ConsultationCTA'

// TODO (Phase 2): replace this lookup with real category data from GET /api/categories/:slug
const CATEGORY_META: Record<string, { title: string; subtitle: string; breadcrumb: string; badge: string; pills: { label: string; count: number }[] }> = {
  'fresh-bouquets': {
    title: 'Fresh Bouquets & Floral Stems',
    subtitle:
      "Hand-cut daily from Sri Lanka's cool central highlands and arranged fresh for Colombo delivery, with silk ribbons and a complimentary gift note on every order.",
    breadcrumb: 'Fresh Bouquets',
    badge: 'Fresh Highland Cut',
    pills: [
      { label: 'All Fresh Stems', count: 48 },
      { label: 'Garden Roses', count: 22 },
      { label: 'Oriental Lilies', count: 9 },
      { label: 'Hydrangeas', count: 6 },
      { label: 'Orchids', count: 11 },
    ],
  },
}

const DEFAULT_META = {
  title: 'Our Floral Collection',
  subtitle: 'Explore our curated arrangements, fresh from Sri Lanka\'s finest growers and delivered same-day across Colombo.',
  breadcrumb: 'Collection',
  badge: 'Fresh Selection',
  pills: [{ label: 'All Products', count: FRESH_BOUQUETS.length }],
}

export default function CategoryListing() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const meta = (categorySlug && CATEGORY_META[categorySlug]) || DEFAULT_META
  const products = FRESH_BOUQUETS // TODO (Phase 2): filter by categorySlug once real data exists

  return (
    <div className="flex flex-col w-full">
      <CatalogHero
        title={meta.title}
        subtitle={meta.subtitle}
        breadcrumbLabel={meta.breadcrumb}
        badge={meta.badge}
        pills={meta.pills}
      />

      <section className="w-full px-4 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <FilterBar
            totalCount={products.length}
            shownCount={products.length}
            onOpenMobileFilters={() => setMobileFiltersOpen((v) => !v)}
          />

          {/* Simple mobile filter drawer — reuses the same sidebar content */}
          {mobileFiltersOpen && (
            <div className="lg:hidden mb-6 grid grid-cols-1 gap-4">
              <FilterSidebar />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="hidden lg:block lg:col-span-3">
              <FilterSidebar />
            </div>
            <div className="lg:col-span-9">
              <ProductGrid products={products} />
              <Pagination
                currentPage={currentPage}
                totalPages={6}
                shownRange={`1 - ${products.length}`}
                totalCount={48}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>

      <FreshnessPromise />
      <ConsultationCTA />
    </div>
  )
}