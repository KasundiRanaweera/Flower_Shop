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
