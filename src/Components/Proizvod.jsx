import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { products } from '../pages/Products';
import classes from './Proizvod.module.css';

const Proizvod = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  function handleBack() {
    navigate('/products');
  }

  function order() {
    navigate('?order=da');
  }

  return (
    <div className={classes.product}>
      <div className={classes.productInfo}>
        <span
          className={classes.openInfo}
          onClick={() => {
            props.openModal(props.id - 1);
          }}
        ></span>
        <h1>{props.name}</h1>
        <h2>
          {new Intl.NumberFormat('hr-HR', {
            style: 'currency',
            currency: 'EUR',
          }).format(props.price)}
        </h2>
      </div>
      <div className={classes.productImgContainer}>
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  );
};

export default Proizvod;
