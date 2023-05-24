import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsArrowRightCircle, BsWind } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import { getCurrentAQIs } from '../redux/current/currentSlice';
// MdOutlineAir useSelector,
// MdAir
// BsWind , BsGearFill
// FaWind
// import { WiDayWindy } from "react-icons/wi";

import styles from '../styles/Current.module.css';

function Current() {
  const { currentAQIs } = useSelector((store) => store.currentAQIs);

  console.log(currentAQIs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentAQIs());
  }, [dispatch]);

  return (
    <>
      <header className={styles.header}>
        <nav>
          <BsChevronLeft />
          <div>2023</div>
        </nav>
        <div>air quality</div>
        <div>
          <MdKeyboardVoice />
          <IoIosSettings />
          {/* <BsGearFill /> */}
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>Map</div>
          <div>
            <p>EUROPE</p>
            <p>aqi: 3 - fair</p>
          </div>
        </div>
        <div className={styles.banner}>STATS BY COUNTRY</div>
        <div className={styles.countriesContainer}>
          <Link to="/italy" className={styles.countryLink}>
            <BsArrowRightCircle className={styles.arrowCircle} />
            <BsWind className={styles.airIcon} />
            {/* <MdOutlineAir className={styles.airIcon} /> */}
            {/* <div>map or icon</div> */}
            <div className={styles.linkText}>
              <p>ITALY</p>
              <p>aqi: 3 - fair</p>
            </div>
          </Link>
          <Link to="/czech" className={styles.countryLink}><div>CZECH REPUBLIC</div></Link>
          <Link to="/italy" className={styles.countryLink}><div>CROATIA</div></Link>
          <Link to="/czech" className={styles.countryLink}><div>DENMARK</div></Link>
        </div>
      </main>
    </>
  );
}

export default Current;
