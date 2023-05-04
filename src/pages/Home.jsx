import { useLocation } from 'react-router-dom';
import classes from './Home.module.css';
import HexagonMenu from '../Components/HexagonMenu';
const Home = () => {
  const location = useLocation();

  return (
    <div className={classes.homeContainer}>
      {location.state && (
        <h1 className={classes.submitMsg}>{location.state}</h1>
      )}
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Home
      </h1>
      <HexagonMenu />
    </div>
  );
};

export default Home;
