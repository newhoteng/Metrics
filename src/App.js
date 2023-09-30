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

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route index element={<Homepage />} />
//           <Route path="/:cityName" element={<Pollutants />} />
//           <Route path="/*" element={<div>Page not found</div>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
