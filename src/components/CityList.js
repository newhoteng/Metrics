// import Current from './components/Current';
// import City from './City';
// import styles from '../styles/Current.module.css';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle, BsWind } from 'react-icons/bs';
import styles from '../styles/Current.module.css';

function City({ city }) {
  const airQualityDesc = `aqi: ${city.aqi} - ${city.textValue}`;

  return (
    <Link to={`/${city.name}`} state={{ pageTitle: 'pollutant concentration', city }} className={styles.countryLink}>
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
      {cities.map((city) => <City key={city.id} city={city} />)}
    </section>
  );
}

const dataShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
  textValue: PropTypes.string.isRequired,
  colorIndicator: PropTypes.string.isRequired,
  components: PropTypes.shape({
    co: PropTypes.number.isRequired,
    no: PropTypes.number.isRequired,
    no2: PropTypes.number.isRequired,
    o3: PropTypes.number.isRequired,
    so2: PropTypes.number.isRequired,
    nh3: PropTypes.number.isRequired,
    pm2_5: PropTypes.number.isRequired,
    pm10: PropTypes.number.isRequired,
  }).isRequired,
});

City.propTypes = {
  city: dataShape.isRequired,
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(dataShape).isRequired,
};
