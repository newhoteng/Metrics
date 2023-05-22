import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Current from './components/Current';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Current />} />
        <Route path="/italy" element={<Forecast />} />
        <Route path="/czech" element={<Forecast />} />
        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
