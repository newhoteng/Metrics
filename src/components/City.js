import { Link } from 'react-router-dom';
import { BsArrowRightCircle, BsWind } from 'react-icons/bs';

export default function City({ city }) {
  let airQualityDesc = `aqi: ${city.aqi} - ${city.textValue}`

  return (
    <Link to={`/${city.name}`} className={styles.countryLink}>
      <BsArrowRightCircle className={styles.arrowCircle} />
      <BsWind className={styles.airIcon} style={{ color: `${city.colorIndicator}` }} />
      <div className={styles.linkText}>
        <p>{city.name.toUpperCase()}</p>
        <p>{airQualityDesc}</p>
      </div>
    </Link>
  );
}