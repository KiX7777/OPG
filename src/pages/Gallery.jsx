import classes from './Gallery.module.css';
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
