import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.state && <h1 className='submitMsg'>{location.state}</h1>}
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Home
      </h1>
    </>
  );
};

export default Home;
