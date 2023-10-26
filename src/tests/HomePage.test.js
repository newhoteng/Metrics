// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { renderWithProviders } from './utils';
import { mockData } from './utils';
// import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
// import { getCurrentAQIs } from './redux/current/currentSlice';

// Component imports
import HomePage from '../components/HomePage';
// import { configureStore } from '@reduxjs/toolkit';

const apiUrls = [
  'https://api.openweathermap.org/data/2.5/air_pollution?lat=28.6448&lon=77.216721&appid=64c5ba010daf9acaae687e9d64fb089e',
  'https://api.openweathermap.org/data/2.5/air_pollution?lat=5.614818&lon=-0.205874&appid=64c5ba010daf9acaae687e9d64fb089e',
];

export const handlers = apiUrls.map((url, index) => (
  http.get(url, async () => {
    await delay(150)
    return HttpResponse.json(mockData[index])
  })
));

// export const handlers = [
//   http.get('/api/user', async () => {
//     await delay(150)
//     return HttpResponse.json('John Smith')
//   })
// ]

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close())

// const mockStore = configureStore([thunk]);

// jest.setTimeout(15000);

// describe('Current component', () => {
//   test('renders correctly', async () => {
//     const store = mockStore({
//       currentAQIs: {
//         currentAQIs: [],
//       },
//     });

//     // Dispatch the asynchronous action
//     await store.dispatch(getCurrentAQIs());

//     const { container } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Current />
//         </BrowserRouter>
//       </Provider>,
//     );

//     expect(container).toMatchSnapshot();
//   });
// });


it('home page renders correctly', () => {
  const HomePageComponent = renderer
    .create(
      <Provider store={store}>
        <HomePage page="/">Home Page</HomePage>
      </Provider>,
    )
    .toJSON();
  expect(HomePageComponent).toMatchSnapshot();
});

// it('renders Current component', () => {
//   render(
//     <Provider store={store}>
//       <Current />
//     </Provider>,
//   );
// });