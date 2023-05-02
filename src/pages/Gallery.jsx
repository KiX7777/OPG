import classes from './Gallery.module.css';
import repica from '../imgs/repica.jpg';
import { createPortal } from 'react-dom';
import GalleryModal from '../Components/GalleryModal';
import { useState, memo } from 'react';

import GallerySlider from '../Components/GallerySlider';
import '../App.css';

const Gallery = memo(() => {
  return (
    <div className={classes.galleryContainer}>
      {/* {images} {showModal && modal} */}
      <GallerySlider />
    </div>
  );
});

export default Gallery;
