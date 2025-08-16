import { Profile, Frame } from "../../assets/images";
import styles from "./About.module.scss";


export const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.stack}>
                <img src={Profile} alt="Profile" className={styles.profile} />
                <img src={Frame} alt="Frame" className={styles.frame} />
            </div>
        </div>
    );
};

export default About;