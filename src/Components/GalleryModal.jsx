import classes from '../pages/Gallery.module.css';
import GallerySlider from './GallerySlider';

const GalleryModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop}></div>
      <div className={classes.galleryModal}>
        {/* <img src={props.img} /> */}
        <GallerySlider />
        <button
          type='button'
          onClick={props.closeModal}
          className={classes.closeModal}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
