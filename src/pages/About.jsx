import { useState } from 'react';
import classes from './About.module.css';
import { ScaleLoader } from 'react-spinners';

const About = () => {
  const [loadMap, setLoadMap] = useState(true);
  return (
    <div className={classes.aboutContainer}>
      <h1>O nama</h1>
      <div className={classes.mapContainer}>
        <div className={classes.map} style={{ width: '100%', height: '50dvh' }}>
          {loadMap && (
            <ScaleLoader
              color='white'
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          )}
          <iframe
            width='100%'
            height='100%'
            onLoad={() => {
              setLoadMap((prev) => !prev);
            }}
            style={{
              borderRadius: '10px',
              boxShadow: '0 2px 10px 5px rgba(0,0,0,0.2)',
            }}
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Josipa%20Martinca%2027+(OPG)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          >
            <a href='https://www.maps.ie/distance-area-calculator.html'>
              measure area map
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
