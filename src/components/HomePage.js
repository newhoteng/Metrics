import AirQDataContainer from './AirQDataContainer';
import HeroSection from './HeroSection';
import styles from '../styles/Current.module.css';

const HomePage = () => {
  const mainText = 'selected cities';
  const secondaryText = 'air quality index';
  return (
    <main className={styles.main}>
      <HeroSection mainText={mainText} secondaryText={secondaryText} />
      <AirQDataContainer />
    </main>
  );
};

export default HomePage;
