import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle, BsWind } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import { getCurrentAQIs } from '../redux/current/currentSlice';
// BsChevronLeft

import styles from '../styles/Current.module.css';

function Current() {
  const { currentAQIs, isLoading, error } = useSelector((store) => store.currentAQIs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentAQIs.length) {
      dispatch(getCurrentAQIs());
    }
  }, [dispatch, currentAQIs]);

  if (isLoading) {
    return (
      <div style={{ padding: '3rem' }}>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ padding: '3rem' }}>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <div>current air quality</div>
        <div>
          <MdKeyboardVoice />
          <IoIosSettings />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div />
          <div>
            <p>SELECTED CITIES</p>
            <p>air quality index</p>
          </div>
        </div>
        <div className={styles.banner}>INDEX BY CITY</div>
        <div className={styles.countriesContainer}>
          {currentAQIs.map((city) => (
            <Link to={`/${city.name}`} key={city.id} className={styles.countryLink}>
              <BsArrowRightCircle className={styles.arrowCircle} />
              <BsWind className={styles.airIcon} style={{ color: `${city.colorIndicator}` }} />
              <div className={styles.linkText}>
                <p>{city.name}</p>
                <p>
                  aqi:
                  {' '}
                  {city.aqi}
                  {' '}
                  -
                  {' '}
                  {city.textValue}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Current;
