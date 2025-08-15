import { useState, useEffect } from "react";
import styles from "./ScrollHint.module.scss";

export default function ScrollHint() {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        setVisible(false); // hide after click
    };

    const handleScroll = (e) => {
        // This checks the container's scroll position instead of window.scrollY
        if (e.target.scrollTop === 0) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        const scrollContainer = document.getElementById('hello');
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            return () => scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    if (!visible) return null;

    return <button className={styles.hint} onClick={handleClick}></button>;
}
