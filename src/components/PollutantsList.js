import PropTypes from 'prop-types';
import styles from '../styles/Current.module.css';

export function PollutantRow({ pollutantName, value }) {
  return (
    <div className={styles.day}>
      <p className={styles.chemName}>
        {pollutantName[0]}
        {pollutantName[1].includes('_') ? <sub>{pollutantName[1].replace('_', '.')}</sub> : <sub>{pollutantName[1]}</sub>}
      </p>
      <div>
        <p>
          {value.toFixed(2)}
          {' '}
          μg/m
          <sup>3</sup>
        </p>
      </div>
    </div>
  );
}

export default function PollutantsList({ city }) {
  const pollutants = [['so', '2'], ['no', '2'], ['pm', '10'], ['pm', '2_5'], ['o', '3'], ['co', '']];

  const pollutantRows = pollutants.map((pollutant) => (
    <PollutantRow
      pollutantName={pollutant}
      value={city?.components[`${pollutant[0]}${pollutant[1]}`]}
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

// Prop validations
PollutantRow.propTypes = {
  pollutantName: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number.isRequired,
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
