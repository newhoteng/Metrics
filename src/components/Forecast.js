import { Link } from 'react-router-dom';
// import { ImUser } from 'react-icons/im';
// import styles from '../styles/NavBar.module.css';

function Forecast() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">arrow</Link></li>
          <li>current</li>
          <li>icons</li>
        </ul>
      </nav>
      <div>Italy</div>
      <div>Today</div>
      <div>Tomorrow</div>
    </>
  );
}

export default Forecast;
