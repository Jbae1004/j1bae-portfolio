import { Profile, Frame } from "../../assets/images";
import styles from "./About.module.scss";

export const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.textContainer}>
                <img src={Frame} alt="" aria-hidden="true" className={styles.frame} />
                <div className={styles.textContent}>
                    <p className={styles.Fredoka}>
                        I&apos;m Jiwon Bae, a recent computer science graduate and
                        front-end junior who loves to build, design, and learn. I&apos;m
                        always looking to grow and improve as a developer. I&apos;m a
                        quick learner, a team player, and passionate about creating
                        interactive, user-friendly experiences.
                    </p>
                    <p className={styles.Fredoka}>
                        Beyond coding, I&apos;m curious about technology, love art, and
                        enjoy bringing designs to life in the browser. I&apos;m excited to
                        bring my enthusiasm to a front-end development role where I can
                        continue learning, growing, and creating meaningful experiences.
                    </p>
                </div>
            </div>
            <img src={Profile} alt="Profile" className={styles.profile} />
        </div>

    );
};

export default About;
