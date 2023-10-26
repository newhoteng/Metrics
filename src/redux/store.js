import { configureStore } from '@reduxjs/toolkit';
import currentAQIsReducer from './current/currentSlice';

const store = configureStore({
  reducer: {
    currentAQIs: currentAQIsReducer,
  },
});

export default store;
