import { Link } from 'react-router-dom';
// import { ImUser } from 'react-icons/im';
// import styles from '../styles/NavBar.module.css';
import { BsChevronLeft } from 'react-icons/bs';
// import { BsArrowRightCircle } from "react-icons/bs"; , BsGearFill
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';

function Current() {
  return (
    <>
      <header>
        <nav>
          <div>
            <div><BsChevronLeft /></div>
            <div>Locations</div>
          </div>
        </nav>
        <div>air quality</div>
        <div><MdKeyboardVoice /></div>
        {/* <div><BsGearFill /></div> */}
        <div><IoIosSettings /></div>
      </header>
      <div>Europe</div>
      <div>STATS BY COUNTRY</div>
      <div>
        <Link to="/italy"><div>Italy</div></Link>
        <Link to="/czech"><div>Czech Repubolic</div></Link>
      </div>
    </>
  );
}

export default Current;
