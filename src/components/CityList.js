// import Current from './components/Current';
// import City from './City';
// import styles from '../styles/Current.module.css';

import { Link } from 'react-router-dom';
import { BsArrowRightCircle, BsWind } from 'react-icons/bs';
import styles from '../styles/Current.module.css';

function City({ city }) {
  let airQualityDesc = `aqi: ${city.aqi} - ${city.textValue}`

  return (
    <Link to={`/${city.name}`} state={{ pageTitle: 'pollutant concentration', city: city }} className={styles.countryLink}>
      <BsArrowRightCircle className={styles.arrowCircle} />
      <BsWind className={styles.airIcon} style={{ color: `${city.colorIndicator}` }} />
      <div className={styles.linkText}>
        <p>{city.name.toUpperCase()}</p>
        <p>{airQualityDesc}</p>
      </div>
    </Link>
  );
}

export default function CityList({ cities }) {
  return (
    <section>
      <div className={styles.banner}>INDEX BY CITY</div>
      {cities.map(city =>
        <City key={city.id} city={city} />
      )}
    </section>
  )
}