import { HomeIcon } from "../../assets/images";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div id="home" className={styles.home}>
      <img src={HomeIcon} alt="Portfolio Logo" className={styles.HomeIcon} />
      <div className={styles.textContainer}>
        <h1 className={styles.gaegu}>
          Hi, I&apos;m&nbsp;Jiwon</h1>
        <p className={styles.gaegu}>
          Welcome&nbsp;to my&nbsp;portfolio!
        </p>
      </div>
    </div>
  );
};

export default Home;
