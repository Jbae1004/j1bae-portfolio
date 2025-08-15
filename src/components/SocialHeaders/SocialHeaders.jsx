import styles from "./SocialHeaders.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const SocialHeader = () => {
    return (
        <div className={styles.iconBar}>
            <a
                href="https://github.com/Jbae1004"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/jiwonbae1004/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiLinkedin />
            </a>
            <a href="mailto:g1bae96@gmail.com">
                <FiMail />
            </a>
        </div>
    );
};

export default SocialHeader;
