import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle, BsWind } from 'react-icons/bs';
import styles from '../styles/Current.module.css';

function City({ city, bgColor }) {
  const airQualityDesc = `aqi: ${city.aqi} - ${city.textValue}`;
  const { name, colorIndicator } = city;

  return (
    <Link to={`/${name}`} state={{ pageTitle: 'pollutant concentration', city }} className={styles.countryLink} style={{ backgroundColor: bgColor }}>
      <BsArrowRightCircle className={styles.arrowCircle} />
      <BsWind className={styles.airIcon} style={{ color: `${colorIndicator}` }} />
      <div className={styles.linkText}>
        <p>{city.name.toUpperCase()}</p>
        <p>{airQualityDesc}</p>
      </div>
    </Link>
  );
}

export default function CityList({ cities }) {
  const bgColorOptions = ['#dd4782', '#cf4378'];
  let currentColorIndex = false;

  const CityTiles = [];
  // Logic to add two column grid checked design
  cities.forEach((city, index) => {
    if (index % 2 === 1) currentColorIndex = !currentColorIndex;
    CityTiles.push(
      <City key={city.id} city={city} bgColor={bgColorOptions[Number(currentColorIndex)]} />,
    );
  });

  return (
    <section>
      <div className={styles.banner}>INDEX BY CITY</div>
      <div className={styles.countriesContainer}>
        {CityTiles}
      </div>
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
  bgColor: PropTypes.string,
};

City.defaultProps = {
  bgColor: '',
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(dataShape).isRequired,
};
