import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';

export default function Nav() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  const changeTitle = () => {
    switch(window.location.pathname){
      case '/':
        return 'current air quality';
      case `/${city.name}`:
        return 'pollutants';
    }
  }

  let pageTitle = changeTitle();
  return (
    <header className={styles.header}>
      {pathName !== '/' ?
        <nav>
          <BsChevronLeft onClick={() => navigate(-1)} />
        </nav> : null
      }
      <div>{pageTitle}</div>
      <div>
        <MdKeyboardVoice />
        <IoIosSettings />
      </div>
    </header>
  );
}
