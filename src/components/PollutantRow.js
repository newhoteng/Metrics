export function PollutantRow({pollutant, value, unit}) {
  const amount = `${value} ${unit}`
  
  return (
    <div className={styles.day}>
      <p className={styles.chemName}>
        {pollutant}
        {/* <sub>{pollutant[1]}</sub> */}
      </p>
      <div>
        <p>{amount}</p>
      </div>
    </div>
  )
}

export default function PollutantList() {
  
}