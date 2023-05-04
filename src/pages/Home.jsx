import { useLocation } from 'react-router-dom';
import classes from './Home.module.css';
import HexagonMenu from '../Components/HexagonMenu';
import logo from '/imgs/logo.webp';
import { memo } from 'react';

const Home = memo(({ setIsHome }) => {
  const location = useLocation();

  return (
    <div className={classes.homeContainer}>
      {location.state && (
        <h1 className={classes.submitMsg}>{location.state}</h1>
      )}
      <div className={classes.homeTitle}>
        <p>Pčelarstvo</p>
        <img className={classes.logo} src={logo} />
      </div>
      <HexagonMenu setIsHome={setIsHome} />
    </div>
  );
});

export default Home;
