import { Icon } from "@iconify/react";
import styles from "./Skills.module.scss";

export const Skills = () => {
    const languages = [
        { name: "JavaScript", icon: "logos:javascript" }
    ];

    const technologies = [
        { name: "React.js", icon: "logos:react" }
    ];

    // const renderSkills = (skills) =>
    //     skills.map((skill) => (
    //         <div key={skill.name} className={styles.skill}>
    //             <Icon icon={skill.icon} className={styles.icon} />
    //             <span>{skill.name}</span>
    //         </div>
    // ));

    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>

            <div className={styles.group}>
                <h3>Programming Languages</h3>
                {/* <div className={styles.list}>{renderSkills(languages)}</div> */}
            </div>

            <div className={styles.group}>
                <h3>Technologies</h3>
                {/* <div className={styles.list}>{renderSkills(technologies)}</div> */}
            </div>
        </section>
    );
};

export default Skills;
