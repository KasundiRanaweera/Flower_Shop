import AboutHero from '../components/about/AboutHero'
import TerroirSection from '../components/about/TerroirSection'
import SourcingCharter from '../components/about/SourcingCharter'
import ColdChainTimeline from '../components/about/ColdChainTimeline'
import TeamSection from '../components/about/TeamSection'
import VisitSalonSection from '../components/about/VisitSalonSection'

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <TerroirSection />
      <SourcingCharter />
      <ColdChainTimeline />
      <TeamSection />
      <VisitSalonSection />
    </div>
  )
}