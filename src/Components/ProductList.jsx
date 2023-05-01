import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../App.css';
import { EffectCards } from 'swiper';
import classes from './Proizvod.module.css';
import Proizvod from './Proizvod';

const ProductList = (props) => {
  const { products } = props;
  console.log(products);

  const slides = products.map((proizvod, i) => (
    <SwiperSlide key={i}>
      <Proizvod
        name={proizvod.name}
        price={proizvod.price}
        img={proizvod.img}
      />
    </SwiperSlide>
  ));

  return (
    <div className={classes.productContainer}>
      {/* <ul
        className='productList'
        style={{
          justifyContent: 'center',
        }}
      >
        {products.map((product) => (
          <li className='productItem' key={product.id}>
            <Link className='productName' to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul> */}

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='cardsSwiper'
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default ProductList;
