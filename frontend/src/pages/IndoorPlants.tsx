import PlantsHero from '../components/plants/PlantsHero'
import PlantCatalog from '../components/plants/PlantCatalog'
import LightDiagnostic from '../components/plants/LightDiagnostic'
import PlantCareBanner from '../components/plants/PlantCareBanner'

export default function IndoorPlants() {
  return (
    <div className="flex flex-col w-full">
      <PlantsHero />
      <PlantCatalog />
      <LightDiagnostic />
      <PlantCareBanner />
    </div>
  )
}