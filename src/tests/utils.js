import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import currentAQIsReducer from '../redux/current/currentSlice'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    // store = setupStore(preloadedState),
    store = configureStore({ reducer: { currentAQIs: currentAQIsReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}



// import React from 'react';
// import { render as rtlRender } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import PropTypes from 'prop-types';
// // your reducer here
// import { rootReducer } from './store';

// const store = ({ preloadedState } = {}) => configureStore({ reducer: rootReducer, preloadedState });
// function render(
//   ui,
//   {
//     initialState,
//     ...renderOptions
//   } = {},
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store({ preloadedState: initialState })}>{children}</Provider>;
//   }
//   Wrapper.propTypes = {
//     children: PropTypes.node.isRequired,
//   };
// return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }
// // re-export everything
// export * from '@testing-library/react';
// // override render method
// export { render };
// export { store };

export const mockData = [
  {
    id: '101',
    name: 'new delhi',
    aqi: 5,
    textValue: 'very poor',
    colorIndicator: '#a070b6',
    components: {
      co: 201.94053649902344,
      no: 0.01877197064459324,
      no2: 0.7711350917816162,
      o3: 68.66455078125,
      so2: 0.6407499313354492,
      pm2_5: 0.5,
      pm10: 0.540438711643219,
      nh3: 0.12369127571582794,
    },
  },
  {
    id: '102',
    name: 'accra',
    aqi: 3,
    textValue: 'moderate',
    colorIndicator: '#f99049',
    components: {
      co: 201.94053649902344,
      no: 0.01877197064459324,
      no2: 0.7711350917816162,
      o3: 68.66455078125,
      so2: 0.6407499313354492,
      pm2_5: 0.5,
      pm10: 0.540438711643219,
      nh3: 0.12369127571582794,
    },
  }
]