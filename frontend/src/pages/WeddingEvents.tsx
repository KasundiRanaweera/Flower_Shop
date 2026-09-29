import WeddingHero from '../components/wedding/WeddingHero'
import ServiceBento from '../components/wedding/ServiceBento'
import ConsultationSection from '../components/wedding/ConsultationSection'
import PortfolioSection from '../components/wedding/PortfolioSection'
import StandardSection from '../components/wedding/StandardSection'

export default function WeddingEvents() {
  return (
    <div className="flex flex-col w-full">
      <WeddingHero />
      <ServiceBento />
      <ConsultationSection />
      <PortfolioSection />
      <StandardSection />
    </div>
  )
}
