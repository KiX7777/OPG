import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import '../App.css';
import repica from '../imgs/repica.jpg';
import pic1 from '../imgs/pic1.jpg';
import pic2 from '../imgs/pic2.jpg';
import pic3 from '../imgs/pic3.jpeg';
import pic4 from '../imgs/pic4.jpg';
import pic5 from '../imgs/pic5.jpg';
import pic6 from '../imgs/pic6.jpg';
import pic7 from '../imgs/pic7.jpg';

import 'swiper/css/bundle';

let photos = [pic1, pic2, pic3, repica, pic4, pic5, pic6, pic7];

register();
const GallerySlider = () => {
  const swiper = useSwiper();
  const slides = photos.map((photo, i) => (
    <SwiperSlide key={i}>
      <img key={i} src={photos[i]} />
    </SwiperSlide>
  ));
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
      {slides}
      {/* <NavBtns /> */}
    </Swiper>
  );
};
export default GallerySlider;
