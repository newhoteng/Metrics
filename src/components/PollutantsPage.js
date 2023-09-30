import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection'
import PollutantsList from './PollutantsList'

const PollutansPage = () => {
  // Try not fetching data again
  const { currentAQIs } = useSelector((store) => store.currentAQIs);
  let { cityName } = useParams()

  let selectedCity = currentAQIs.find((city) => city.name === cityName)

  return (
    <main>
      <HeroSection />
      <PollutantsList city={selectedCity} />
    </main>
  )
}

export default PollutansPage;