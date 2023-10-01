import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Outlet } from 'react-router-dom';
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
    pageTitle = location.state?.pageTitle;
  }

  return (
    <>
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
      <Outlet />
    </>
  );
}

Header.propTypes = {
  homePageTitle: PropTypes.string.isRequired,
};

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <h1>NAV</h1>
//     </header>
//   );
// }

// const changeTitle = () => {
//   switch(window.location.pathname){
//     case '/':
//       return 'current air quality';
//     case '/:city':
//       return 'pollutants';
//   }
// }

// const pageTitle = changeTitle();
