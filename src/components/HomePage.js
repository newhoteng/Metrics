import AirQDataContainer from './AirQDataContainer';
import HeroSection from './HeroSection';
import styles from '../styles/Current.module.css';

const HomePage = () => {
  // const image = '';
  const mainText = 'selected cities';
  const secondaryText = 'air quality index';
  return (
    <main className={styles.main}>
      <HeroSection mainText={mainText} secondaryText={secondaryText} />
      <AirQDataContainer />
    </main>
  );
};

// import styles from '../styles/Current.module.css';

// export default function HomePage() {
//   return (
//     <main className={styles.testing}>
//       <h1>HELLO</h1>
//     </main>
//   );
// }

export default HomePage;
