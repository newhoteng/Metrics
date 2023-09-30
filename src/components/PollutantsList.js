export function PollutantRow({pollutantName, value, unit}) {
  const amount = `${value} ${unit}`
  
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
  )
}

export default function PollutantsList({ city }) {
  const pollutants = [['so', '2'], ['no', '2'], ['pm', '10'], ['pm', '2_5'], ['o', '3'], ['co', '']];
  
  const pollutantRows = pollutants.map((pollutant) => (
    <PollutantRow
      pollutantName={`${pollutant[0]}
      ${pollutant[1].includes('_') ? <sub>{pollutant[1].replace('_', '.')}</sub> : <sub>{pollutant[1]}</sub>}`}
      value={(city.components[`${pollutant[0]}${pollutant[1]}`]).toFixed(2)}
      unit={`ug/m${<sup>3</sup>}`}
    />
  ))

  return (
    <section>
      <div className={styles.banner}>
        POLLUTANT CONCENTRATION(μg/m
        <sup>3</sup>
        )
      </div>
      <div className={styles.forecastContainer}>{pollutantRows}</div>
    </section>
  )
}
