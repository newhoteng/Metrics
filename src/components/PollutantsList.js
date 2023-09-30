import PropTypes from 'prop-types';
import styles from '../styles/Current.module.css';

export function PollutantRow({ pollutantName, value, unit }) {
  const amount = `${value} ${unit}`;

  return (
    <div className={styles.day}>
      <p className={styles.chemName}>
        {pollutantName}
        {/* <sub>{pollutant[1]}</sub> */}
      </p>
      <div>
        <p>{amount}</p>
      </div>
    </div>
  );
}

export default function PollutantsList({ city }) {
  const pollutants = [['so', '2'], ['no', '2'], ['pm', '10'], ['pm', '2_5'], ['o', '3'], ['co', '']];

  const pollutantRows = pollutants.map((pollutant) => (
    <PollutantRow
      pollutantName={`${pollutant[0]}
      ${pollutant[1].includes('_') ? <sub>{pollutant[1].replace('_', '.')}</sub> : <sub>{pollutant[1]}</sub>}`}
      value={(city.components[`${pollutant[0]}${pollutant[1]}`]).toFixed(2)}
      unit={`ug/m${<sup>3</sup>}`}
      key={`${pollutant[0]}${pollutant[1]}`}
    />
  ));

  return (
    <section>
      <div className={styles.banner}>
        POLLUTANT CONCENTRATION(μg/m
        <sup>3</sup>
        )
      </div>
      <div className={styles.forecastContainer}>{pollutantRows}</div>
    </section>
  );
}

PollutantRow.propTypes = {
  pollutantName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

PollutantsList.propTypes = {
  city: PropTypes.shape({
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

// HeroSection.propTypes = {
//   image: PropTypes.string.isRequired,
//   mainText: PropTypes.string.isRequired,
//   secondaryText: PropTypes.string.isRequired,
// };
