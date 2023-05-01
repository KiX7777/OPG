import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import '../App.css';
import repica from '../imgs/repica.jpg';

import 'swiper/css/bundle';

register();
const GallerySlider = () => {
  const swiper = useSwiper();
  return (
    <Swiper
      key='swiper'
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={(true, { clickable: true })}
      modules={[Pagination, Navigation, Autoplay]}
      className='mySwiper'
      navigation={true}
      loop={true}
    >
      <SwiperSlide>
        <img
          key='1'
          onClick={() => {
            swiper.activeIndex(2);
          }}
          src='https://images.unsplash.com/photo-1549269459-ba9e31874ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img key='2' src={repica} />
      </SwiperSlide>
      <SwiperSlide>
        <img
          key='3'
          src='https://images.unsplash.com/photo-1568526381923-caf3fd520382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          key='4'
          src='https://images.unsplash.com/photo-1600752384899-7d3dcbb2428c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          key='5'
          src='https://images.unsplash.com/photo-1586779161268-51d3e65d20fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        />
      </SwiperSlide>
      {/* <NavBtns /> */}
    </Swiper>
  );
};
export default GallerySlider;
