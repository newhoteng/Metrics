import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Component imports
import Pollutants from './components/Pollutants';

// it('pollutant details page renders correctly', () => {
//   const pollutantDetails = renderer
//     .create(
//       <Provider store={store}>
//         <Pollutants page={`/${city.name}`}>Pollutant Details Page</Pollutants>
//       </Provider>,
//     )
//     .toJSON();
//   expect(pollutantDetails).toMatchSnapshot();
// });

// {currentAQIs.map((city) => (
//   <Route path={`/${city.name}`} key={city.id} element={<Pollutants prop={city} />} />
// ))}

it('renders Pollutants component', () => {
  render(
    <Provider store={store}>
      <Pollutants />
    </Provider>,
  );
});
