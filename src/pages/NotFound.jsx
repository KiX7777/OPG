import classes from './NotFound.module.css';
import errorPic from '/imgs/error404.png';

const NotFound = () => {
  return (
    <>
      <img className={classes.errorPic} src={errorPic} />
    </>
  );
};

export default NotFound;
