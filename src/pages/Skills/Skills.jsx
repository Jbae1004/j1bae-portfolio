import styles from './Skills.module.scss';

export const Skills = () => {

    return (
        <div id="skills" className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>
            <p className={styles.description}>
                Proficient in HTML, CSS, JavaScript, React, and Git. Experienced with
                responsive design, cross-browser compatibility, and front-end
                frameworks. Familiar with RESTful APIs, Agile methodologies, and UI/UX
                principles.
            </p>
        </div>
    );
}

export default Skills;