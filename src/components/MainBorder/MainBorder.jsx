import styles from "./MainBorder.module.scss";

const MainBorder = () => (
  <>
    <div className={styles.topBorder} />
    <div className={styles.bottomBorder} />
    <div className={styles.leftBorder} />
    <div className={styles.rightBorder} />
  </>
);

export default MainBorder;
