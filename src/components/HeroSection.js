import PropTypes from 'prop-types';
import styles from '../styles/Current.module.css';

export default function HeroSection({ image, mainText, secondaryText }) {
  return (
    <section className={styles.hero}>
      <div>{image}</div>
      <div>
        <p>{mainText.toUpperCase()}</p>
        <p>{secondaryText.toLowerCase()}</p>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  image: PropTypes.element,
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

HeroSection.defaultProps = {
  image: <></>,
};
