import classes from './Gallery.module.css';
import repica from '../imgs/repica.jpg';
import { createPortal } from 'react-dom';
import GalleryModal from '../Components/GalleryModal';
import { useState } from 'react';

import GallerySlider from '../Components/GallerySlider';
import '../App.css';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  let src = [
    repica,
    repica,
    repica,
    repica,
    repica,
    repica,
    repica,
    repica,
    repica,
    repica,
    repica,
    repica,
  ];

  let images = [];

  let gallerysrc = [
    {
      original: repica,
      originalWidth: '400px',
    },
    {
      original: repica,
      originalWidth: '400px',
    },
    {
      original: repica,
      originalWidth: '400px',
    },
    {
      original: repica,
      originalWidth: '400px',
    },
  ];
  let clickedImg;

  function openModal(event, ID) {
    setShowModal((prev) => !prev);
    console.log(ID);
  }

  for (let i = 0; i < 10; i++) {
    const photo = (
      <img
        onClick={(e) => {
          openModal(e, i);
        }}
        key={i}
        className={classes.photo}
        src={src[i]}
      />
    );
    images.push(photo);
  }

  const modal = createPortal(
    <GalleryModal showModal={showModal} closeModal={openModal} img={repica} />,
    document.getElementById('gallery-modal')
  );

  return (
    <div className={classes.galleryContainer}>
      {/* {images} {showModal && modal} */}
      <GallerySlider />
    </div>
  );
};

export default Gallery;
