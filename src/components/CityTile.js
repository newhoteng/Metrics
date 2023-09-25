export default function CityTile({ city }) {
  return (
    <Link to={`/${city.name}`} key={city.id} className={styles.countryLink}>
      <BsArrowRightCircle className={styles.arrowCircle} />
      <BsWind className={styles.airIcon} style={{ color: `${city.colorIndicator}` }} />
      <div className={styles.linkText}>
        <p>{city.name.toUpperCase()}</p>
        <p>
          aqi:
          {' '}
          {city.aqi}
          {' '}
          -
          {' '}
          {city.textValue}
        </p>
      </div>
    </Link>
  );
}