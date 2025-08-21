import { useEffect, useRef, useState } from "react";
import { AboutDuck1, AboutDuck2, AboutDuck3, AboutDuck4 } from "../../assets/images";
import styles from "./About.module.scss";

export const About = () => {
    const topRowRef = useRef(null);
    const bottomRowRef = useRef(null);
    const [topVisible, setTopVisible] = useState(false);
    const [bottomVisible, setBottomVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === topRowRef.current) {
                        setTopVisible(entry.isIntersecting);
                    }
                    if (entry.target === bottomRowRef.current) {
                        setBottomVisible(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.2 } // trigger when 20% is visible
        );

        if (topRowRef.current) observer.observe(topRowRef.current);
        if (bottomRowRef.current) observer.observe(bottomRowRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="about" className={styles.about}>
            {/* Top Row */}
            <div ref={topRowRef} className={`${styles.row} ${styles.topRow}`}>
                <p className={`${styles.Fredoka} ${topVisible ? styles.slideLeft : ""}`}>
                    I&apos;m Jiwon Bae, a recent computer science graduate and front-end
                    junior who loves to build, design, and learn. I&apos;m always looking
                    to grow and improve as a developer. I&apos;m a quick learner, a team
                    player, and passionate about creating interactive, user-friendly
                    experiences.
                </p>

                <div className={`${styles.flipCard} ${topVisible ? styles.slideRight : ""}`}>
                    <div className={styles.flipInner}>
                        <img src={AboutDuck1} alt="Duck 1" className={styles.flipFront} />
                        <img src={AboutDuck2} alt="Duck 2" className={styles.flipBack} />
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div ref={bottomRowRef} className={`${styles.row} ${styles.bottomRow}`}>
                <div className={`${styles.flipCard} ${bottomVisible ? styles.slideLeft : ""}`}>
                    <div className={styles.flipInner}>
                        <img src={AboutDuck3} alt="Duck 3" className={styles.flipFront} />
                        <img src={AboutDuck4} alt="Duck 4" className={styles.flipBack} />
                    </div>
                </div>

                <p className={`${styles.Fredoka} ${bottomVisible ? styles.slideRight : ""}`}>
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
