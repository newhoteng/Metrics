import AirQDataContainer from './AirQDataContainer';
import HeroSection from './HeroSection';

const Homepage = () => {
  const image = '';
  const mainText = 'selected cities';
  const secondaryText = 'air quality index';
  return (
    <main>
      <HeroSection image={image} mainText={mainText} secondaryText={secondaryText} />
      <AirQDataContainer />
    </main>
  );
};

export default Homepage;
