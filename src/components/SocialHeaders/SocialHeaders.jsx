import styles from "./SocialHeaders.module.scss";
import { FiGithub, FiLinkedin, FiUser } from "react-icons/fi";

export const SocialHeader = () => {
    return (
        <div className={styles.iconBar}>
            <a
                href="https://github.com/Jbae1004"
                target="_blank"
                rel="noopener noreferrer"
                data-label="GitHub"
            >
                <FiGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/jiwonbae1004/"
                target="_blank"
                rel="noopener noreferrer"
                data-label="LinkedIn"
            >
                <FiLinkedin />
            </a>
            <a
                href="/resume.pdf"
                download="Jiwon_Bae_Resume.pdf"
                data-label="Resume"
            >
                <FiUser />
            </a>
        </div>
    );
};

export default SocialHeader;
