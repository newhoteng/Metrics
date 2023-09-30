import PropTypes from 'prop-types';
import styles from '../styles/Current.module.css';

export default function HeroSection({ image, mainText, secondaryText }) {
  return (
    <seciton className={styles.hero}>
      <div>{image}</div>
      <div>
        <p>{mainText.toUpperCase()}</p>
        <p>{secondaryText.toLowerCase()}</p>
      </div>
    </seciton>
  );
}

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};
