import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PlantCard, { type Plant } from './PlantCard'

const CATEGORIES = [
  { id: 'all', label: 'All Indoor Plants' },
  { id: 'low-light', label: 'Low-Light Varieties' },
  { id: 'air-purifying', label: 'Air-Purifying Statement Greens' },
  { id: 'rare-orchids', label: 'Rare Orchids & Calatheas' },
]

// TODO (Phase 2): replace with a real fetch to GET /api/products?category=indoor-plants
const PLANTS: Plant[] = [
  {
    id: '1', name: 'Monstera Deliciosa Sovereign', series: 'Statement Greens',
    description: 'Architectural split leaves trained on a moss pole, suited for well-lit living rooms and verandahs.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTe5znAJn-OYFPhIqoJ9GBT4sIOXM_qnrM3FvDSmwIEx72zfW2M8Y34x9XTuMhBVcnDBsdsZ3uYaPo32jPGYHzFu6nRxitZ6a0eawWG1PmldsdBTfe1NKI5WcFovrLoUSsiRTWJJ3FerPCHtP1HMNNXstWSAU4WqJfwnlwE-hJAOyvGa-HaNLT27CJCcJVOP0TFFqwzO7GlI-GqqO0H0eXBHYSrtxCeqnBCikXsCmnfPLMs9DE9mQ_xA',
    price: 14500, badges: ['Air Purifying'], vesselNote: 'Vessel: Glazed Ceramic', careLabel: 'Water every 5-7d',
    category: 'air-purifying', light: 'filtered-sun', pet: 'foliage-only', vessel: 'glazed',
  },
  {
    id: '2', name: 'Highland Cloud Fern', series: 'Mist Fern',
    description: 'Lacy cascading fern acclimatized for shaded living areas; naturally helps regulate indoor humidity.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB56tW1G789AtSIRLThBfu9ppqw-tn04jkqauBKJPmA1klkel2bfTn79OXuEk5yyUP3a1iwtO_XT_rlnV0wVN2uIcWJhceGXL4Sn3EYWSEquBT-ud5eCK3Z0tZMT_vAbFnogwH3o4YmOUY_X1zbwbhALPPwvI8N1HVwDwj5w1z0hkOKFKXmXNJkGNTgMkyTLp2EeHbLiUjZIzvGjnTupVD1kbh5rY7iOv1GuvEV6gcq3VqjhvLOXfLptg',
    price: 8900, badges: ['Pet Friendly'], vesselNote: 'Vessel: Brass Stand', careLabel: 'Mist daily',
    category: 'low-light', light: 'low-indirect', pet: 'pet-safe', vessel: 'brass',
  },
  {
    id: '3', name: 'Ficus Lyrata Specimen Tree', series: 'Living Sculpture',
    description: 'A five-foot statement piece with large violin-shaped leaves in a hand-turned terracotta pot.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo3XfEb-1ph8YnhMSPooMeaAf3rOoVcK6IR2xd3pYCmAT9IvU8g47SuXCBQ6DOIiBWXL9G-f6ADrqFFOq-bI6_JRPFjqLHS9sul0nbihtwBPeNb3h_ugl_8Xo0o3C0ozvSuQZ6sKS3bzJsB_MkQi33JLJnQdKDqMMX8IJdEGQFu9MZGAFFoo8uN50OCgTyq0HnXlbvWDxQIf9gn3pfvlXJoUuUOiXvEvXQOjY_wTYG5jz8NITt-iECjA',
    price: 24000, badges: ['Living Sculpture'], vesselNote: 'Vessel: Terracotta', careLabel: 'Bright, ambient light',
    category: 'air-purifying', light: 'filtered-sun', pet: 'foliage-only', vessel: 'terracotta',
  },
  {
    id: '4', name: 'Cascading Golden Pothos Totem', series: 'Resilient Greens',
    description: 'Trained on a coconut coir totem. Highly tolerant of low light and air-conditioned rooms.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwUC7WwqfFeT1Y05CDWqmqGWdMAxyMMiE1fADz1YPnMCDgcPSeAsLRPLoxHha5tGxzLgBJxPZDQT0umqlWkHunvKTAzMFC928qAdyphfAyUZWqdEt_RGq94hmBgDdrFkke2LsAcvB1hGjYFu9rII17pi115S75Gv1HDOJ11CAHsBMVwn7R1meeY-zu2vA9cnrItQ-567rVFz_8HLXhuHytfH3Sz49t4aBySkRGB_UTpb48f7OiTxLmIg',
    price: 6800, badges: ['Air Purifying'], vesselNote: 'Vessel: Fluted Ceramic', careLabel: 'AC resilient',
    category: 'low-light', light: 'low-indirect', pet: 'foliage-only', vessel: 'glazed',
  },
  {
    id: '5', name: 'Dendrobium Orchid Composition', series: 'Flowering Display',
    description: 'Multiple orchid stems in a shallow ceramic bowl over living moss — a long-lasting centerpiece.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRkXYHAmTAB5Qjis07aYRULA-EVJRc5w_Xo_ovoh9262RbaFQPkgJQR8uuExDAZrqyrP984_MNOl6Ii3bP3-jnlQLQz_ytg_MIM7vSSxbpgLZKFq5vMf-sSSYF75aeg6xmrIXTZJwXYhmRdlbnKrc-0gxryqiPfAj8OMQdbLCC1EX_KfXhAKMXe_3aIAGgFt0PlaaX94dW_81jnq8OlFLesJulrLYfhdvBmeiETs3TXm2nHvl0IYh9Rg',
    price: 16500, badges: ['Long-Lasting Blooms'], vesselNote: 'Vessel: Ceramic Bowl', careLabel: '8+ weeks bloom',
    category: 'rare-orchids', light: 'filtered-sun', pet: 'pet-safe', vessel: 'glazed',
  },
  {
    id: '6', name: 'Calathea Orbifolia', series: 'Prayer Plant',
    description: 'Broad round leaves striped in silver-green, gently folding at nightfall.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAupjUQk0aC5Jl1vBKgZOu8QlO6TrJjHYtRbr7g9xNYLNsJ66D4AhK8R25DzHnObDrACSUpa1CeI4M-2peEA0pKO2xGv-kiCFo2OLfqheSjK2RS_oNHkMBExlGydvz3SerzlKhWVvWWwl6oLwIpW8aVTJmO9TApQ99GORTmxxhfP5gQ36zuo-f2jBr2MH_iSnsX9oLx3ky3tv4FoGRBjFxB0Bza_E4Qu1rPRma5t98basPMJMqql4av4Q',
    price: 11200, badges: ['Pet Friendly'], vesselNote: 'Vessel: Stoneware', careLabel: 'Low to med shade',
    category: 'rare-orchids', light: 'shade-thriving', pet: 'pet-safe', vessel: 'glazed',
  },
]

export default function PlantCatalog() {
  const [category, setCategory] = useState('all')
  const [light, setLight] = useState('')
  const [pet, setPet] = useState('')
  const [vessel, setVessel] = useState('')

  const filtered = useMemo(() => {
    return PLANTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (light && p.light !== light) return false
      if (pet && p.pet !== pet) return false
      if (vessel && p.vessel !== vessel) return false
      return true
    })
  }, [category, light, pet, vessel])

  function resetFilters() {
    setCategory('all')
    setLight('')
    setPet('')
    setVessel('')
  }

  return (
    <>
      <section className="sticky top-24 z-30 bg-surface/95 backdrop-blur-md shadow-sm px-4 lg:px-12 py-3">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={
                  cat.id === category
                    ? 'px-4 py-1.5 rounded-full text-label-md transition-all whitespace-nowrap bg-primary text-on-primary shadow-sm'
                    : 'px-4 py-1.5 rounded-full text-label-md transition-all whitespace-nowrap bg-surface-container-low text-on-surface hover:bg-surface-container'
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative inline-block">
                <select
                  value={light}
                  onChange={(e) => setLight(e.target.value)}
                  className="appearance-none bg-surface-container-lowest text-on-surface text-label-md pl-4 pr-8 py-1.5 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value="">Lighting Condition (All)</option>
                  <option value="low-indirect">Low Indirect</option>
                  <option value="filtered-sun">Filtered Sunlight</option>
                  <option value="shade-thriving">Shade Thriving</option>
                </select>
                <ChevronDown size={18} className="text-outline absolute right-2 top-2 pointer-events-none" />
              </div>
              <div className="relative inline-block">
                <select
                  value={pet}
                  onChange={(e) => setPet(e.target.value)}
                  className="appearance-none bg-surface-container-lowest text-on-surface text-label-md pl-4 pr-8 py-1.5 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value="">Pet-Friendly Status</option>
                  <option value="pet-safe">Safe for Cats &amp; Dogs</option>
                  <option value="foliage-only">Display Specimen (Foliage Only)</option>
                </select>
                <ChevronDown size={18} className="text-outline absolute right-2 top-2 pointer-events-none" />
              </div>
              <div className="relative inline-block">
                <select
                  value={vessel}
                  onChange={(e) => setVessel(e.target.value)}
                  className="appearance-none bg-surface-container-lowest text-on-surface text-label-md pl-4 pr-8 py-1.5 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value="">Pot Type</option>
                  <option value="terracotta">Raw Terracotta</option>
                  <option value="glazed">Glazed Ceramic</option>
                  <option value="brass">Brass Footed Planter</option>
                </select>
                <ChevronDown size={18} className="text-outline absolute right-2 top-2 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-body-sm text-secondary">
              <span>Showing <strong className="text-primary font-semibold">{filtered.length}</strong> plants</span>
              <span className="hidden md:inline text-outline-variant">|</span>
              <button onClick={resetFilters} className="hidden md:inline text-primary hover:underline text-label-md">Reset Filters</button>
            </div>
          </div>
        </div>
      </section>

      <section id="plantsGrid" className="px-4 lg:px-12 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-secondary py-10">No plants match these filters yet — try resetting them.</p>
          )}
        </div>
      </section>
    </>
  )
}