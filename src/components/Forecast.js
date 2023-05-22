import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import styles from '../styles/Current.module.css';
// import styles from '../styles/NavBar.module.css'; BsArrowRightCircle, BsWind

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
    </>
  );
}

export default Forecast;
