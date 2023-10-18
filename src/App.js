import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { getCurrentAQIs } from '../redux/current/currentSlice'; useSelector,
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCurrentAQIs } from './redux/current/currentSlice';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PollutantsPage from './components/PollutantsPage';
import './App.css';

function App() {
  // const { currentAQIs } = useSelector((store) => store.currentAQIs);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!currentAQIs.length) {
    dispatch(getCurrentAQIs());
    // }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header homePageTitle="current" />}>
          <Route index element={<HomePage />} />
          <Route path="/:cityName" element={<PollutantsPage />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
