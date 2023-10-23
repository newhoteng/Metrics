// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import { store } from '../redux/store';
// import { getCurrentAQIs } from './redux/current/currentSlice';

// Component imports
import HomePage from '../components/HomePage';

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