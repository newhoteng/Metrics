export default function HeroSection({ image, mainText, secondaryText }) {
  return (
    <seciton className={styles.hero}>
      <div>{image}</div>
      <div>
        <p>{mainText}</p>
        <p>{secondaryText}</p>
      </div>
    </seciton>
  );
}
