export interface OccasionTab {
  id: string
  label: string
}

export const OCCASION_TABS: OccasionTab[] = [
  { id: 'all', label: 'All Occasions' },
  { id: 'anniversary', label: 'Anniversaries & Romance' },
  { id: 'birthday', label: 'Birthdays & Milestones' },
  { id: 'wedding', label: 'Poruwa & Wedding Celebrations' },
  { id: 'condolence', label: 'Sympathy & Condolences' },
  { id: 'corporate', label: 'Corporate & Diplomatic Handover' },
]

interface OccasionTabsProps {
  activeTab: string
  onChange: (id: string) => void
}

// Converted from the original vanilla-JS switchOccasionTab() into React state,
// so the active styling and section filtering are driven by one source of truth.
export default function OccasionTabs({ activeTab, onChange }: OccasionTabsProps) {
  return (
    <section className="sticky top-24 z-30 bg-surface/95 backdrop-blur-md py-2 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {OCCASION_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={
                tab.id === activeTab
                  ? 'px-4 py-1.5 rounded-full text-label-md transition-all whitespace-nowrap bg-primary text-on-primary shadow-sm'
                  : 'px-4 py-1.5 rounded-full text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}