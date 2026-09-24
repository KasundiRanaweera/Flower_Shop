import { SlidersHorizontal, Filter, ArrowUpDown } from 'lucide-react'

interface FilterBarProps {
  totalCount: number
  shownCount: number
  onOpenMobileFilters: () => void
}

export default function FilterBar({ totalCount, shownCount, onOpenMobileFilters }: FilterBarProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2 text-label-md">
        <span className="text-secondary flex items-center gap-1">
          <SlidersHorizontal size={18} />
          Filter Catalog:
        </span>
        <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
          <span className="text-[11px] text-secondary">Speed:</span>
          <button className="bg-primary-container text-on-primary px-2 py-0.5 rounded text-[11px]">Same-Day Express</button>
          <button className="text-on-surface-variant hover:text-on-surface px-2 py-0.5 rounded text-[11px]">Next Day</button>
        </div>
        <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
          <span className="text-[11px] text-secondary">Price:</span>
          <button className="hover:bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[11px]">&lt; 12k</button>
          <button className="bg-surface-container-high text-primary font-bold px-2 py-0.5 rounded text-[11px]">12k - 20k</button>
          <button className="hover:bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[11px]">20k+</button>
        </div>
        <button
          onClick={onOpenMobileFilters}
          className="lg:hidden ml-auto flex items-center gap-1 bg-surface-container px-2 py-1 rounded-lg text-primary text-[11px]"
        >
          <Filter size={16} />
          All Filters
        </button>
      </div>

      <div className="flex items-center gap-2 justify-between md:justify-end">
        <span className="text-body-sm text-secondary">
          Showing <strong>{shownCount} of {totalCount}</strong> arrangements
        </span>
        <div className="flex items-center gap-2 bg-surface-container-low px-2 py-1 rounded-lg">
          <ArrowUpDown size={18} className="text-secondary" />
          <label className="sr-only" htmlFor="sortDropdown">Sort by</label>
          <select id="sortDropdown" className="bg-transparent text-label-md text-primary focus:outline-none cursor-pointer">
            <option value="featured">Featured Curations</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="stems">Stem Count (Largest)</option>
            <option value="bestseller">Colombo Favorites</option>
          </select>
        </div>
      </div>
    </div>
  )
}