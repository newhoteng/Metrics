import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import { BsChevronLeft } from 'react-icons/bs';
import styles from '../styles/Current.module.css';

export default function Header({ homePageTitle }) {
  const navigate = useNavigate();
  const location = useLocation();

  const pathName = window.location.pathname;

  let pageTitle = homePageTitle;
  if (location.state?.pageTitle) {
    console.log(location.state.pageTitle);
    pageTitle = location.state?.pageTitle;
  }

  // const changeTitle = () => {
  //   switch(window.location.pathname){
  //     case '/':
  //       return 'current air quality';
  //     case '/:city':
  //       return 'pollutants';
  //   }
  // }

  // const pageTitle = changeTitle();
  return (
    <header className={styles.header}>
      {pathName !== '/'
        ? (
          <nav>
            <BsChevronLeft onClick={() => navigate(-1)} />
          </nav>
        ) : null}
      <div>{pageTitle}</div>
      <div>
        <MdKeyboardVoice />
        <IoIosSettings />
      </div>
    </header>
  );
}

Header.propTypes = {
  homePageTitle: PropTypes.string.isRequired,
};
