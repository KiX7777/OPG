import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '../App.css'
import { EffectCards } from 'swiper'
import classes from './Proizvod.module.css'
import Proizvod from './Proizvod'
import { useState } from 'react'
import GalleryModal from './GalleryModal'

const ProductList = (props) => {
  const { products, setTitle } = props
  console.log(products)
  const swiper = useSwiper()
  const [activeIndex, setActiveIndex] = useState()
  const [openModal, setOpenModal] = useState(false)

  const slides = products.map((proizvod, i) => (
    <SwiperSlide key={i}>
      <Proizvod
        name={proizvod.name}
        price={proizvod.price}
        img={proizvod.img}
        id={proizvod.id}
        openModal={showDetails}
      />
    </SwiperSlide>
  ))

  function closeModal() {
    setOpenModal(false)
  }

  function showDetails(id) {
    setActiveIndex(id)
    setOpenModal(true)
    console.log(products[id])
  }

  return (
    <div className={classes.productContainer}>
      <h1>Proizvodi</h1>

      <Swiper
        effect={'cards'}
        onActiveIndexChange={(e) => {
          setActiveIndex(e.activeIndex)
          console.log(e.activeIndex)
        }}
        grabCursor={true}
        modules={[EffectCards]}
        className='cardsSwiper'
      >
        {slides}
      </Swiper>
      {openModal && (
        <GalleryModal
          text={products[activeIndex].info}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default ProductList
