import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; // Import redux-thunk middleware
import { getCurrentAQIs } from './redux/current/currentSlice';

// Component imports
import Current from './components/Current';

const mockStore = configureStore([thunk]); // Apply middleware

jest.setTimeout(15000);

describe('Current component', () => {
  test('renders correctly', async () => {
    const store = mockStore({
      currentAQIs: {
        currentAQIs: [],
      },
    });

    // Dispatch the asynchronous action
    await store.dispatch(getCurrentAQIs());

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Current />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});


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
