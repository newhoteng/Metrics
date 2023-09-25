export default function HeroSection(image, mainText, secondaryText) {
  return (
    <div className={styles.hero}>
      <div>{image}</div>
      <div>
        <p>{mainText}</p>
        <p>{secondaryText}</p>
      </div>
    </div>
  );
}
