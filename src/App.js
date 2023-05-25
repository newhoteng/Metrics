import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Current from './components/Current';
import Pollutants from './components/Pollutants';
import './App.css';

function App() {
  const { currentAQIs } = useSelector((store) => store.currentAQIs);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Current />} />
        {currentAQIs.map((city) => (
          <Route path={`/${city.name}`} key={city.id} element={<Pollutants prop={city} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
