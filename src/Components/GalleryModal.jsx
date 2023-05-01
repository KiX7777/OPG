import classes from '../pages/Gallery.module.css';

const GalleryModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop}></div>
      <div className={classes.galleryModal}>
        {/* <img src={props.img} /> */}
        <p className={classes.productText}>{props.text}</p>
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
