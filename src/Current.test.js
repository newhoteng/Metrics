import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Component imports
import Current from './components/Current';

it('current aqi page renders correctly', () => {
  const currentAQIPage = renderer
    .create(
      <Provider store={store}>
        <Current page="/">Home Page</Current>
      </Provider>,
    )
    .toJSON();
  expect(currentAQIPage).toMatchSnapshot();
});

it('renders Current component', () => {
  render(
    <Provider store={store}>
      <Current />
    </Provider>,
  );
});