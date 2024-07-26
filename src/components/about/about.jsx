import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h1 className={styles.title}>About</h1>
        <div className={styles.content}>
            <img src={getImageUrl("about/MyPhoto.png")} alt="pic with laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Image" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server Image" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in building fast and optimized back-end system and APIs.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="ui Image" />
                    <div className={styles.aboutItemText}>
                        <h3>Competitive Programmer</h3>
                        <p>Practicing competitive programming for 2 years, solved more than 500 que.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}