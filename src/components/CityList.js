// import Current from './components/Current';
import City from './City';
import styles from '../styles/Current.module.css';

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