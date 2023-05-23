import { configureStore } from '@reduxjs/toolkit';
import currentAQIsReducer from './current/currentSlice';
// import missionsReducer from './missions/missionsSlice';
// import dragonReducer from './Dragons/DragonsSlice';
// import rocketReducer from './Rockets/RocketsSlice';

export const store = configureStore({
  reducer: {
    currentAQIs: currentAQIsReducer,
    // dragon: dragonReducer,
    // rocket: rocketReducer,
  },
});

export default store;
