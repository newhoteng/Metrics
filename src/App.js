// import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Current from './components/Current';
// import Pollutants from './components/Pollutants';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PollutantsPage from './components/PollutantsPage';
import './App.css';

// function App() {
//   const { currentAQIs } = useSelector((store) => store.currentAQIs);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Current />} />
//         {currentAQIs.map((city) => (
//           <Route path={`/${city.name}`} key={city.id} element={<Pollutants prop={city} />} />
//         ))}
//       </Routes>
//     </BrowserRouter>
//   );
// }

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
