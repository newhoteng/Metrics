// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

// Component imports
import PollutantsPage from '../components/PollutantsPage';

it('home page renders correctly', () => {
  const PollutantsPageComponent = renderer
    .create(
      <Provider store={store}>
        <PollutantsPage page="/">Home Page</PollutantsPage>
      </Provider>,
    )
    .toJSON();
  expect(PollutantsPageComponent).toMatchSnapshot();
});
