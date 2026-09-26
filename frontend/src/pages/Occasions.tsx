import { useState } from 'react'
import { Heart, PartyPopper, Leaf, Award } from 'lucide-react'
import OccasionsHero from '../components/occasions/OccasionsHero'
import OccasionTabs from '../components/occasions/OccasionTabs'
import OccasionSection from '../components/occasions/OccasionSection'
import CalligrapherStudio from '../components/occasions/CalligrapherStudio'
import MilestoneCard, { type MilestoneProduct } from '../components/occasions/MilestoneCard'
import DiasporaBanner from '../components/occasions/DiasporaBanner'
import type { OccasionProduct } from '../components/occasions/OccasionProductCard'

// Which sections are visible for each tab — same mapping as the original design.
const TAB_SECTION_MAP: Record<string, string[]> = {
  all: ['anniversary', 'birthday', 'condolence', 'milestones'],
  anniversary: ['anniversary'],
  birthday: ['birthday'],
  wedding: ['milestones'],
  condolence: ['condolence'],
  corporate: ['milestones'],
}

// TODO (Phase 2): replace all product arrays below with real fetches to GET /api/products?occasion=...
const ANNIVERSARY_PRODUCTS: OccasionProduct[] = [
  {
    id: 'a1',
    name: 'The Colombo Velvet Grandeur',
    description: '50 hand-selected crimson roses wrapped in hunter-green linen weave, with an optional pairing add-on.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBOsR_nIeJS-o1iYzI4mhWLeBFiwHwQIL2uKmGd68uPettfbPL7GmURhr5sIh45_gMb79gL45yQNc4ztYSPZ_ZB3W6QaU_liqKZ4USPr7CA7BDIOStnG3Ib3d-kwXVSb8V841ZxKMifsb9Tmzr1uxml6XxKnP6xh-bo7K86ZF4hXn4jd5dV5JiCBpaLtikEbtANTG61CBfF00VOccoQ9dij_zH5L9I0iG5MY2TLUxW2UVU51izzEnq4g',
    price: 32500,
    badge: 'Signature Rose',
    footerNote: 'Same-Day Courier: 2h',
    ctaLabel: 'Reserve Stem',
  },
  {
    id: 'a2',
    name: 'Victoria Pavilion Velvet Box',
    description: 'Pastel tea roses and fragrant jasmine, set in a reusable emerald velvet keepsake box.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKAoFzJbJrpBFu5-bHKJQQss8Q27FiMwlXEMYMXQjU0rDQhQlJtM9x8g8vfYCiVvsCtqSP-UGk4oztNDkd7x-HyaOIitFhXQl9bqlExueVClmw4an_zTu734b8w0oLg9iRp799jy8jndC8-JSVCYZUHZ5JUkBHeiMcQugfW932xIroQ908fFdZRi1Mb0NHjluB4GxSY0BCt7lC5qB0dPHOaP5R7aLm1mQnioBF7LSACTB7GAEPTNWgAQ',
    price: 24000,
    badge: 'Keepsake Box',
    footerNote: 'Free Personalized Calligraphy',
    ctaLabel: 'Reserve Stem',
  },
  {
    id: 'a3',
    name: 'Highland Rose & Tea Hamper',
    description: 'Fresh stem lilies paired with premium Ceylon tea and dark chocolate truffles.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxvXpI2jzOvfzocwLczDXckwXYDa8D3XZef7PGzwgtWI-f4XxquOiyIh9DBJ1G-3HsUvnxOgSj_9GJF0d44TmHrvXVE2lxxgDmnKvVaEaRu3TvUpgB3J_xvVS59Gfc7KB4oReEeOfi_L2sdkFpW6QRW3PFpBM2O_NKoFHYtwVvuaZbuBvpREYRct2_fd6COK4XWHOqVG4BLX35MAmzVpnoZf7g79adS9mR9cAQXR-eVjgtl8L2kwG1eQ',
    price: 41000,
    badge: 'Pairing Hamper',
    footerNote: 'Islandwide Express',
    ctaLabel: 'Reserve Stem',
  },
]

const BIRTHDAY_PRODUCTS: OccasionProduct[] = [
  {
    id: 'b1',
    name: 'Sunburst Morning Jubilee',
    description: 'Golden sunflowers, peach ranunculus, and chamomile sprays with a complimentary ribbon tag.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMIZqVkOQeq2FAMFsk9aMCGG5KXWrUmov8NvHGVBxddJzflfVXh-PZHyrhb8hMel1BrAgR2O9NxIpg9R-UoeH51ln-saI5Y_DgHSEza4m-h4AK9EMtTsDeciwOwVdAJhamVKX0LeeWTj6q58acmx2c06POJlEg_Sb0sQuJmo_2a3ew6eO3beoISU-qjDEL0bhziwGOnTBPwg8xBmZEG-ys938JYVtrqfzXkltBcKomKG5sZLw73bimVQ',
    price: 16800,
    badge: 'Party Accent',
    footerNote: 'Includes 18" Helium Balloon',
    ctaLabel: 'Add to Order',
  },
  {
    id: 'b2',
    name: 'Blush Blossom & Chocolate Crate',
    description: 'Imported blue hydrangeas and blush roses with a selection of Swiss chocolate pralines.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBemwSEVoYmn8eJ5QZ5KXOu0BVEZg_7cB-3aeTJRDRH4oVrRXT8ZsBeuB_emUnzbs_gbz1JFoNyOuZi8JGzI49wfEgDNdzdrLV-Gg5kwxnO0giaSUuwPBxSDj__w874qb6i6A4540C9GpQ8yZa6K2ZrHl-7LX6QET3SM71H57daWZoXJ4iP2FxK7ojYN2PJ2brHvPm61lDgvQxBhWPYSoOoSDZxcJsK2zFVFuO-nivfzGfcqxQ73ELIaQ',
    price: 28500,
    badge: 'Bestseller',
    footerNote: 'Swiss Chocolate Pralines Included',
    ctaLabel: 'Add to Order',
  },
  {
    id: 'b3',
    name: 'Lavender Mist Cylinder',
    description: 'Lavender orchids resting alongside silver dollar eucalyptus foliage in a modern vase.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEdvAdzqSOGGJ5OP0cyKobGRYg9Fr7Oe-k-QyU2numUM9Fbspt921MXmaDQpptFGDhj_UNu7L8gAQfcvQ_WvRg5vnDjMPk2iXKlG1-myFYIrAUoGJ1pTvTjqySKeV8BJXoPv20b4UnAvo8u_Aq8f_JBO3Jf7K3hL1ah_UuZfTXJ-ECubAgRvoZjq5AHuQXawNi9jtDyiTwrRR5h7w_j9GiEVdEKC_T8BV9qZ8se9xgelAR9UJIgtyCMw',
    price: 19200,
    badge: 'Chic Flora',
    footerNote: 'Morning Colombo Delivery',
    ctaLabel: 'Add to Order',
  },
]

const CONDOLENCE_PRODUCTS: OccasionProduct[] = [
  {
    id: 'c1',
    name: 'Serenity Mountain Casablanca',
    description: 'White oriental lilies, white carnations, and silver willow with a discreet condolence card.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWMA20Kzm3CF_ESxpvHEJE_86BrERtPTXV2t_Zmzfyv3eXI_H6T_jcq04qMks9NkF61bysuOJkVnkURzOss9HJ_Cqx6J8zWU0V6DSEMlYn7GZjtEIo-KvYIjT57XAcuIkA34SEgkqZ1K5n-1KAdOvXYW4WyYqnJAZShwpv87MiAtjZmei-2Crjuc7GFBmbQWwJqGkYtHeipTDv3bl40dcrHiSepCHytcL9hxCgOKtY69cOhsnwns4_Zg',
    price: 21000,
    badge: 'Subdued Wrap',
    footerNote: 'Discreet Uniformed Delivery',
    ctaLabel: 'Send Solace',
  },
  {
    id: 'c2',
    name: 'The Colombo Sanctuary Easel',
    description: 'A standing floral tribute with white gladioli, dendrobium orchids, and areca fronds.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgKd_d0t0zqqUxS7VsRkSuOjkUCLKgO0T-_GyTQUmtsALetQzX9laY4WG2wg9-r-IBRyNLhlsS5_nat1TmuL0niNiIA3cGNZr3wTcvFZQ0QU3hVy-GayGCPq1JizzVsFnFqqzZvO3w6Uy5pJ0tR3X_keMafwRT2GFsot2Xtp4MbDde_U8oM_wGJEM4_O97GCrWN_gTcxwNgWO8LP9SMSlruTltV93uHzYXeXyQusIjs_ghOPF3dRcPgA',
    price: 38000,
    badge: 'Formal Tribute',
    footerNote: 'Includes Custom Banner Inscription',
    ctaLabel: 'Send Solace',
  },
  {
    id: 'c3',
    name: 'Ivory Tuberose & Fern Urn',
    description: 'Fragrant white tuberoses and delicate moss arranged in an unglazed ceramic vessel.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrtOVhxkceMVD_sRu5FDuFJDFXWWZpPjXV7x2rMpFsF9JjrPT1q3J3sUUz25UD7qN8Kmz7c4Rysk8wG5SQCvEwGryW2dLFVxIXoh63_eOeqM3BwQUCRdfNvspXjhOSG8XYA5hjqQTOxGqYJvZei3yJVqwnZCocCvZ4IU49cDMnVsvuBCH05pE9KZuyZZSQaJAsOjMsxgD6IwckAGkK_XAYMhCBfpTsOZOosZLPRQSkhVROjrbwRtXshg',
    price: 18500,
    badge: 'Home Solace',
    footerNote: 'Safe Ceramic Transport',
    ctaLabel: 'Send Solace',
  },
]

const MILESTONE_PRODUCTS: MilestoneProduct[] = [
  {
    id: 'm1',
    name: 'The Golden Sigiriya Sovereign',
    description: 'Golden orchids combined with yellow tea roses, framed with traditional betel vine symbolism for Poruwa ceremonies and formal occasions.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBajifZ4ldmLubDVw9YDeI18q1XC_Sm38kLeLBYFYx3MiLP0EirkarBnl3d4Wgiw844wWhptzMt2FHd1hYoStng2WKA4bUbvG1WhKh9oa6XL3OInYYlEWjXo2nTm9cxAHYPYzOEpQzxesnXtMXvHd5ZyP9JW-MbZisFn5vDKb-KoMlJmO92OQrb3pFVm__hlUYcVXruV1yjrKvp4osq1hvF-XFAV78W6miyZ4gCGca6IKywUrW01d6D3A',
    price: 45000,
    tag: 'Poruwa & Auspicious',
    tagColor: 'gold',
    note: 'Includes Handcrafted Urn',
    ctaLabel: 'Reserve Delivery',
  },
  {
    id: 'm2',
    name: "Executive Congratulations Hamper",
    description: 'Blue agapanthus, white calla lilies, and premium Ceylon tea for executive promotions and corporate gifting.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOTURzzQYpdgfJXn1F2dzVNuljttAeOddnPbZBlkpWQU_hm6qeSWD2mVFm62ts4MdwECFopD6rkNmtv7wjgaxBsnNXZFLHDzDjv07TzBzdN2UwJWZgT2HrcuxaqvOpyYJ1lnICR6OEehANsMhLmtECmhTO40t2lMdmaYYugW9pjVkGvaWRNOVpOTAz8EqZCpINSXPUHUR9y1b2a37zueyGmaFR-iYqWfq7EyMedj23SwA1KGhcsXiGPg',
    price: 52000,
    tag: 'Executive Handover',
    tagColor: 'green',
    note: 'VAT & Corporate Invoicing Available',
    ctaLabel: 'Reserve Delivery',
  },
]

export default function Occasions() {
  const [activeTab, setActiveTab] = useState('all')
  const visibleSections = TAB_SECTION_MAP[activeTab] ?? []

  return (
    <div className="flex flex-col w-full">
      <OccasionsHero />
      <OccasionTabs activeTab={activeTab} onChange={setActiveTab} />

      <OccasionSection
        id="anniversary"
        visible={visibleSections.includes('anniversary')}
        eyebrow="Timeless Devotion"
        eyebrowIcon={Heart}
        title="Anniversary & Romantic Gestures"
        description="Rose cascades, custom keepsake cards, and thoughtful pairings crafted for memorable moments together."
        products={ANNIVERSARY_PRODUCTS}
        background="surface"
      />

      <OccasionSection
        id="birthday"
        visible={visibleSections.includes('birthday')}
        eyebrow="Joyful Celebrations"
        eyebrowIcon={PartyPopper}
        title="Birthday Celebrations & Festivities"
        description="Vibrant colour palettes, party accents, and chocolate pairings curated for smiles across generations."
        products={BIRTHDAY_PRODUCTS}
        background="surface-container-low"
      />

      <CalligrapherStudio />

      <OccasionSection
        id="condolence"
        visible={visibleSections.includes('condolence')}
        eyebrow="Peace & Reflection"
        eyebrowIcon={Leaf}
        title="Sympathy & Gentle Condolences"
        description="Quiet grace in white oriental lilies and ivory chrysanthemums, presented with care and discretion."
        products={CONDOLENCE_PRODUCTS}
        background="surface"
      />

      <section
        id="section-milestones"
        className={`w-full bg-surface-container-low py-14 ${visibleSections.includes('milestones') ? 'block' : 'hidden'}`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
            <div>
              <div className="flex items-center gap-2 text-tertiary text-[11px] uppercase tracking-widest">
                <Award size={16} />
                Poruwa & Distinction
              </div>
              <h2 className="font-display text-headline-lg text-primary mt-1">Milestones, Poruwa & Corporate Gifting</h2>
              <p className="text-body-md text-secondary max-w-xl mt-1">
                Prestigious orchid arrangements and formal presentations for weddings, embassy events, and executive occasions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MILESTONE_PRODUCTS.map((product) => (
              <MilestoneCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <DiasporaBanner />
    </div>
  )
}