import classes from './Gallery.module.css'
import { memo } from 'react'
import GallerySlider from '../Components/GallerySlider'
import '../App.css'

const Gallery = memo(({ setTitle }) => {
  return (
    <div className={classes.galleryContainer}>
      <GallerySlider />
    </div>
  )
})

export default Gallery
