import classes from './HexagonMenu.module.css';
import { useNavigate } from 'react-router-dom';

const HexagonMenu = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.hexContainer}>
      <ul className={classes.row}>
        <div
          onClick={() => {
            navigate('/about');
            setIsHome(false);
          }}
          tabIndex={0}
          className={`${classes.hexagon} ${classes.abouthex}`}
        ></div>
        <div
          onClick={() => {
            navigate('/products');
            setIsHome(false);
          }}
          tabIndex={0}
          className={`${classes.hexagon} ${classes.productshex}`}
        ></div>
      </ul>
      <ul className={classes.row}>
        <div
          onClick={() => {
            navigate('/gallery');
            setIsHome(false);
          }}
          tabIndex={0}
          className={`${classes.hexagon} ${classes.galleryhex}`}
        ></div>
        <div
          onClick={() => {
            navigate('/contact');
            setIsHome(false);
          }}
          tabIndex={0}
          className={`${classes.hexagon} ${classes.contacthex}`}
        ></div>
      </ul>
    </div>
  );
};

export default HexagonMenu;
