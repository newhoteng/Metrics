// import Current from './components/Current';
import City from './City'

export default function({ cities }) {
  return (
    <section>
      <div className={styles.banner}>INDEX BY CITY</div>
      {cities.map(city =>
        <City key={city.id} city={city} />
      )}
    </section>
  )
}