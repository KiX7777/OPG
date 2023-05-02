import classes from './LoadingSpinner.module.css';
import { ScaleLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className={classes.loadingSpinner}>
      {' '}
      <ScaleLoader
        className={classes.loader}
        width={15}
        height={50}
        loading={true}
      />
    </div>
  );
};

export default LoadingSpinner;
