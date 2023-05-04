import classes from './HexagonMenu.module.css';

const HexagonMenu = () => {
  return (
    <div className={classes.hexContainer}>
      <ul className={classes.row}>
        <div className={classes.hexagon}>
          <span>I am text!</span>
        </div>
        <div className={classes.hexagon}>
          <span>I am text!</span>
        </div>
      </ul>
      <ul className={classes.row}>
        <div className={classes.hexagon}>
          <span>I am text!</span>
        </div>
        <div className={classes.hexagon}>
          <span>I am text!</span>
        </div>
      </ul>
    </div>
  );
};

export default HexagonMenu;
