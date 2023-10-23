import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentAQIs } from '../redux/current/currentSlice';
import CityList from './CityList';
import styles from '../styles/Current.module.css';

export default function AirQDataContainer() {
  const { currentAQIs, isLoading, error } = useSelector((store) => store.currentAQIs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentAQIs.length) {
      dispatch(getCurrentAQIs());
    }
  }, [dispatch, currentAQIs]);

  return (
    <>
      {/* display error message if data does not get fetched */}
      {error && (
        <h1 className={styles.countriesContainer}>
          Something went wrong, please reload the page
        </h1>
      )}
      {/* display 'Loading' or data when loading or fetched respectively */}
      {isLoading ? <h1 className={styles.countriesContainer}>Loading...</h1> : (
        <CityList cities={currentAQIs} />
      )}
    </>
  );
}
