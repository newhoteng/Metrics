import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsChevronLeft, BsWind } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import styles from '../styles/Current.module.css';

const pollutantNames = [['so', '2'], ['no', '2'], ['pm', '10'], ['pm', '2_5'], ['o', '3'], ['co', '']];

function Pollutants({ prop }) {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to="/"><BsChevronLeft /></Link>
        </nav>
        <div>pollutant concentration</div>
        <div>
          <MdKeyboardVoice />
          <IoIosSettings />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <BsWind className={styles.airIcon} style={{ color: `${prop.colorIndicator}` }} />
          </div>
          <div>
            <p>{prop.name}</p>
            <p>
              aqi:
              {' '}
              {prop.aqi}
              {' '}
              -
              {' '}
              {prop.textValue}
            </p>
          </div>
        </div>
        <div className={styles.banner}>
          POLLUTANT CONCENTRATION(μg/m
          <sup>3</sup>
          )
        </div>
        <div className={styles.forecastContainer}>
          {pollutantNames.map((pollutant) => (
            <div className={styles.day} key={`${pollutant[0]}${pollutant[1]}`}>
              <p className={styles.chemName}>
                {pollutant[0]}
                <sub>{pollutant[1]}</sub>
              </p>
              <div>
                <p>
                  {(prop.components[`${pollutant[0]}${pollutant[1]}`]).toFixed(2)}
                  {' '}
                  μg/m
                  <sup>3</sup>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Pollutants;

Pollutants.propTypes = {
  prop: PropTypes.shape({
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
  }).isRequired,
};
