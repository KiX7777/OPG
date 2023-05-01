import { useLocation } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  const location = useLocation();
  console.log(location);

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
    </div>
  );
};

export default Home;
