import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import CategoryGrid from '../components/home/CategoryGrid'
import FeaturedProducts from '../components/home/FeaturedProducts'
import DeliveryCoverage from '../components/home/DeliveryCoverage'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import CareBanner from '../components/home/CareBanner'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <FeaturedProducts />
      <DeliveryCoverage />
      <HowItWorks />
      <Testimonials />
      <CareBanner />
    </div>
  )
}
