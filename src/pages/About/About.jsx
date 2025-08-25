import { useEffect, useState } from "react";
import { AboutDuck1, AboutDuck2, AboutDuck3, AboutDuck4 } from "../../assets/images";
import styles from "./About.module.scss";
import clsx from "clsx";

export const About = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = document.getElementById("about");
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div id="about" className={styles.about}>
            <div className={clsx(styles.row, { [styles.in]: visible })}>
                <p className={clsx(styles.fredoka, styles.fromLeft)}>
                    I&apos;m Jiwon Bae, a recent computer science graduate and front-end
                    junior who loves to build, design, and learn. I&apos;m always looking
                    to grow and improve as a developer. I&apos;m a quick learner, a team
                    player, and passionate about creating interactive, user-friendly
                    experiences.
                </p>
                <div className={clsx(styles.flipCard, styles.fromRight)}>
                    <div className={styles.flipInner}>
                        <img src={AboutDuck1} alt="Duck 1" className={styles.flipFront} />
                        <img src={AboutDuck2} alt="Duck 2" className={styles.flipBack} />
                    </div>
                </div>
            </div>

            <div className={clsx(styles.row, { [styles.inDelayed]: visible })}>
                <div className={clsx(styles.flipCard, styles.fromLeft)}>
                    <div className={styles.flipInner}>
                        <img src={AboutDuck3} alt="Duck 3" className={styles.flipFront} />
                        <img src={AboutDuck4} alt="Duck 4" className={styles.flipBack} />
                    </div>
                </div>
                <p className={clsx(styles.fredoka, styles.fromRight)}>
                    Beyond coding, I&apos;m curious about technology, love art, and enjoy
                    bringing designs to life in the browser. I&apos;m excited to bring my
                    enthusiasm to a front-end development role where I can continue
                    learning, growing, and creating meaningful experiences.
                </p>
            </div>
        </div>
    );
};

export default About;
