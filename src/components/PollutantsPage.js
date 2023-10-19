import { useLocation } from 'react-router-dom';
import { BsWind } from 'react-icons/bs';
import HeroSection from './HeroSection';
import PollutantsList from './PollutantsList';
import styles from '../styles/Current.module.css';

const PollutantsPage = () => {
  const { city } = useLocation().state;

  const {
    name, aqi, textValue, colorIndicator,
  } = city;

  const secondaryText = `aqi: ${aqi} - ${textValue}`;

  return (
    <main className={styles.main}>
      <HeroSection image={<BsWind className={styles.airIcon} style={{ color: `${colorIndicator}` }} />} mainText={name} secondaryText={secondaryText} />
      <PollutantsList city={city} />
    </main>
  );
};

export default PollutantsPage;
