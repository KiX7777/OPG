import classes from '../pages/Gallery.module.css';

const GalleryModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.galleryModal}>
        {/* <img src={props.img} /> */}
        <div className={classes.productInfo}>
          <p className={classes.productText}>{props.text}</p>
        </div>
      </div>
      <button
        type='button'
        onClick={props.closeModal}
        className={classes.closeModal}
      >
        X
      </button>
    </div>
  );
};

export default GalleryModal;
