import { useParams } from 'react-router-dom';
import HeroSection from './HeroSection';
import PollutantsList from './PollutantsList';
import styles from '../styles/Current.module.css';

const PollutantsPage = () => {
  // Try not fetching data again
  const { currentAQIs } = useSelector((store) => store.currentAQIs);
  let { cityName } = useParams()
  
  let selectedCity = currentAQIs.find((city) => city.name === cityName)

  image = `${<BsWind className={styles.airIcon} style={{ color: `${selectedCity.colorIndicator}` }} />}`;
  mainText = cityName;
  secondaryText = `aqi: ${selectedCity.aqi} - ${selectedCity.textValue}`;

  return (
    <main>
      <HeroSection image={image} mainText={mainText} secondaryText={secondaryText} />
      <PollutantsList city={selectedCity} />
    </main>
  )
}

export default PollutantsPage;
