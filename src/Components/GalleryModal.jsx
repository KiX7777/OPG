import classes from '../pages/Gallery.module.css'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'
import { useState } from 'react'

const GalleryModal = (props) => {
  const noderef = useRef(null)
  const [open, setOpen] = useState(props.openModal)
  return (
    <div>
      <div className={classes.backdrop}></div>
      <CSSTransition
        in={open}
        appear={open}
        mountOnEnter
        nodeRef={noderef}
        unmountOnExit
        timeout={400}
        onEnter={() => {
          console.log('enter')
        }}
        onExit={() => {
          console.log('exit')
        }}
        onExiting={() => {
          console.log('exiting')
        }}
        classNames={{
          appear: '',
          appearActive: classes.ModalOpen,
          enter: '',
          enterActive: classes.ModalOpen,
          exit: '',
          exitActive: classes.ModalClose,
        }}
      >
        <div ref={noderef} className={`${classes.galleryModal}`}>
          {/* <img src={props.img} /> */}
          <div className={classes.productInfo}>
            <p className={classes.productText}>{props.text}</p>
          </div>
        </div>
      </CSSTransition>
      <button
        type='button'
        onClick={() => {
          props.closeModal()
          setOpen(false)
        }}
        className={classes.closeModal}
      >
        X
      </button>
    </div>
  )
}

export default GalleryModal
