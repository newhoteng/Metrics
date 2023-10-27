import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';

// Component imports
import PollutantsPage from '../components/PollutantsPage';

it('pollutants page renders correctly', () => {
  const mockCity = {
    id: '101',
    name: 'ACCRA',
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
  };

  // const { asFragment } = render(
  //   <BrowserRouter>
  //     <Pollutants prop={mockCity} />
  //   </BrowserRouter>,
  // );
  // expect(asFragment(<Pollutants prop={mockProp} />)).toMatchSnapshot();

  const PollutantsPageComponent = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <PollutantsPage path="/:cityName">Pollutants Page</PollutantsPage>
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(PollutantsPageComponent).toMatchSnapshot();
});


// import { render } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';

// Component imports
// import Pollutants from './components/Pollutants';

// describe('Tests for Pollutants detail component', () => {
//   it('snapshot Pollutants detail component', () => {
//     const mockProp = {
//       id: '101',
//       name: 'ACCRA',
//       aqi: 3,
//       textValue: 'moderate',
//       colorIndicator: '#f99049',
//       components: {
//         co: 201.94053649902344,
//         no: 0.01877197064459324,
//         no2: 0.7711350917816162,
//         o3: 68.66455078125,
//         so2: 0.6407499313354492,
//         pm2_5: 0.5,
//         pm10: 0.540438711643219,
//         nh3: 0.12369127571582794,
//       },
//     };
//     const { asFragment } = render(
//       <BrowserRouter>
//         <Pollutants prop={mockProp} />
//       </BrowserRouter>,
//     );
//     expect(asFragment(<Pollutants prop={mockProp} />)).toMatchSnapshot();
//   });

//   it('alternative way using toBeInTheDocument jest-dom uitility library', () => {
//     const mockProp = {
//       id: '101',
//       name: 'ACCRA',
//       aqi: 3,
//       textValue: 'moderate',
//       colorIndicator: '#f99049',
//       components: {
//         co: 201.94053649902344,
//         no: 0.01877197064459324,
//         no2: 0.7711350917816162,
//         o3: 68.66455078125,
//         so2: 0.6407499313354492,
//         pm2_5: 0.5,
//         pm10: 0.540438711643219,
//         nh3: 0.12369127571582794,
//       },
//     };
//     const { getByText } = render(
//       <BrowserRouter>
//         <Pollutants prop={mockProp} />
//       </BrowserRouter>,
//     );
//     expect(getByText(mockProp.name)).toBeInTheDocument();
//   });
// });
