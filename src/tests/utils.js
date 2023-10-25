import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { setupStore } from '../app/store'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}



import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
// your reducer here
import { rootReducer } from './store';

const store = ({ preloadedState } = {}) => configureStore({ reducer: rootReducer, preloadedState });
function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store({ preloadedState: initialState })}>{children}</Provider>;
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
export { store };