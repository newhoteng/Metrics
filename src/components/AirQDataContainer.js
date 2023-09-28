import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentAQIs } from '../redux/current/currentSlice';
import CityList from './CityList';

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
        <div style={{ padding: '3rem' }}>
          <h1>Something went wrong, please reload the page</h1>
        </div>
      )}
      {/* display 'Loading' or data when loading or fetched respectively */}
      {isLoading ? <h1>Loading...</h1> : (
        <CityList cities={currentAQIs} />
      )}
    </>
  )
}