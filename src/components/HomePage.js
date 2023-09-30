import AirQDataContainer from './AirQDataContainer';
import HeroSection from './HeroSection';

const Homepage = () => {
  image = '';
  mainText = 'selected cities';
  secondaryText = 'air quality index';
  return (
    <main>
      <HeroSection image={image} mainText={mainText} secondaryText={secondaryText} />
      <AirQDataContainer />
    </main>
  )
}

  export default Homepage;
  