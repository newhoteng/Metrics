import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PollutantsPage from './components/PollutantsPage';
import './App.css';

function App() {
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
