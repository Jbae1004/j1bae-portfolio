import { HomeIcon1, HomeIcon2 } from "../../assets/images";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.iconStack}>
        <img src={HomeIcon1} alt="Duck1" className={styles.iconA} />
        <img src={HomeIcon2} alt="Duck2" className={styles.iconB} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.gaegu}>Hi, I&apos;m&nbsp;Jiwon</h1>
        <p className={styles.gaegu}>Welcome&nbsp;to my&nbsp;portfolio!</p>
      </div>
    </div>
  );
};

export default Home;