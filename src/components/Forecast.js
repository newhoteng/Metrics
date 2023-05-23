import { Link } from 'react-router-dom';
import { BsChevronLeft, BsArrowRightCircle } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import styles from '../styles/Current.module.css';

function Forecast() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to="/"><BsChevronLeft /></Link>
        </nav>
        <div>air quality</div>
        <div>
          <MdKeyboardVoice />
          <IoIosSettings />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>Map</div>
          <div>
            <p>ITALY</p>
            <p>aqi: 3 - fair</p>
          </div>
        </div>
        <div className={styles.banner}>4-DAY FORECAST</div>
        <div className={styles.forecastContainer}>
          <div className={styles.day}>
            <p>Today</p>
            <div>
              <p>aqi: 3 - fair</p>
              <BsArrowRightCircle className={styles.forecastArrow} />
            </div>
          </div>
          {/* another */}
          <div className={styles.day}>
            <p>Tomorrow</p>
            <div>
              <p>aqi: 3 - fair</p>
              <BsArrowRightCircle className={styles.forecastArrow} />
            </div>
          </div>
          {/* another */}
          <div className={styles.day}>
            <p>Today</p>
            <div>
              <p>aqi: 3 - fair</p>
              <BsArrowRightCircle className={styles.forecastArrow} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Forecast;
