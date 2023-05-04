import { useLocation } from 'react-router-dom';
import classes from './Home.module.css';
import HexagonMenu from '../Components/HexagonMenu';
import logo from '/imgs/logo.png';

const Home = () => {
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
      <HexagonMenu />
    </div>
  );
};

export default Home;
