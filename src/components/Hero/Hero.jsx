import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suruchi</h1>
        <p className={styles.description}>
          I'm a B.Tech student at IIT Patna with strong skills in DSA and web devlopment. I build full-stack web applications, explore machine learning, and sharpen my DSA knowledge through competitive programming. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:suruchik661@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/image-modified.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
