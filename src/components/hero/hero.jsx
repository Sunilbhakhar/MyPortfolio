import React from "react";
import styles from "./hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Bhakhar</h1>
            <p className={styles.description}>An Aspiring Software Engineer, Full-stack Developer, and Programmer</p>
            <a className={styles.contactBtn} href="mailto:sunilbhakhar333@gmail.com">Contact Me</a>
        </div>
        <img 
            src={getImageUrl("hero/gol12.png")} 
            alt="hero-image" 
            className={styles.heroImg}/>
        <div></div>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}