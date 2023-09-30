import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsWind } from 'react-icons/bs';
import HeroSection from './HeroSection';
import PollutantsList from './PollutantsList';
import styles from '../styles/Current.module.css';

const PollutantsPage = () => {
  // Try not fetching data again
  const { currentAQIs } = useSelector((store) => store.currentAQIs);
  const { cityName } = useParams();

  const selectedCity = currentAQIs.find((city) => city.name === cityName);

  const image = `${<BsWind className={styles.airIcon} style={{ color: `${selectedCity.colorIndicator}` }} />}`;
  const mainText = cityName;
  const secondaryText = `aqi: ${selectedCity.aqi} - ${selectedCity.textValue}`;

  return (
    <main className={styles.main}>
      <HeroSection image={image} mainText={mainText} secondaryText={secondaryText} />
      <PollutantsList city={selectedCity} />
    </main>
  );
};

export default PollutantsPage;
