import { Profile, Frame } from "../../assets/images";
import styles from "./About.module.scss";

export const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.stack}>
                <img src={Profile} alt="Profile" className={styles.profile} />
                <img src={Frame} alt="Frame" className={styles.frame} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.header}>Jiwon here!</h2>
                <p className={styles.Fredoka}>
                    I&apos;m Jiwon Bae, a recent computer science graduate and front-end
                    junior who loves to build, design, and learn. I&apos;m always looking
                    to grow and improve as a developer.
                </p>
                <p className={styles.Fredoka}>
                    I&apos;m a quick learner, a team player, and passionate about creating
                    interactive, user-friendly experiences. Beyond coding, I&apos;m
                    curious about technology, love art, and enjoy bringing designs to life
                    in the browser.
                </p>
                <p className={styles.Fredoka}>
                    I&apos;m excited to bring my enthusiasm to a front-end development
                    role where I can continue learning, growing, and creating meaningful
                    experiences.
                </p>
            </div>
        </div>
    );
};

export default About;
