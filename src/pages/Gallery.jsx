import classes from './Gallery.module.css'
import { memo, useRef } from 'react'
import GallerySlider from '../Components/GallerySlider'
import '../App.css'
import { CSSTransition } from 'react-transition-group'

const Gallery = memo(({ setTitle }) => {
  const href = useRef(null)

  return (
    <CSSTransition
      timeout={1400}
      in={true}
      appear={true}
      nodeRef={href}
      classNames={{
        appear: 'Appear',
        appearActive: 'AppearActive',
        appearDone: 'AppearActive',
      }}
    >
      <div ref={href} className={classes.galleryContainer}>
        <GallerySlider />
      </div>
    </CSSTransition>
  )
})

export default Gallery
