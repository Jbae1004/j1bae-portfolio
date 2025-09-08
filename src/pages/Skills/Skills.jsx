import { Icon } from "@iconify/react";
import styles from "./Skills.module.scss";

export const Skills = () => {
    const languages = [
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Python", icon: "logos:python" },
        { name: "Java", icon: "logos:java" },
        { name: "C", icon: "mdi:language-c" },
        { name: "C++", icon: "mdi:language-cpp" },
    ];

    const technologies = [
        { name: "React.js", icon: "logos:react" },
        { name: "HTML", icon: "vscode-icons:file-type-html" },
        { name: "CSS", icon: "vscode-icons:file-type-css" },
        { name: "SCSS", icon: "vscode-icons:file-type-scss2" },
        { name: "Linux", icon: "logos:linux-tux" },
        { name: "Jupyter", icon: "logos:jupyter" },
    ];

    const renderSkills = (skills) =>
        skills.map((skill) => (
            <div key={skill.name} className={styles.skill}>
                <Icon icon={skill.icon} className={styles.icon} />
                <span>{skill.name}</span>
            </div>
        ));

    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>

            <div className={styles.group}>
                <h3>Programming Languages</h3>
                <div className={styles.list}>{renderSkills(languages)}</div>
            </div>

            <div className={styles.group}>
                <h3>Technologies</h3>
                <div className={styles.list}>{renderSkills(technologies)}</div>
            </div>
        </section>
    );
};

export default Skills;
