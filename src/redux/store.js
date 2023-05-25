import { configureStore } from '@reduxjs/toolkit';
import currentAQIsReducer from './current/currentSlice';

export const store = configureStore({
  reducer: {
    currentAQIs: currentAQIsReducer,
  },
});

export default store;
