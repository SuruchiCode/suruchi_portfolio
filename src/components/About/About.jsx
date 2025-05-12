import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a frontend developer skilled in building responsive and optimized web applications using React.js, HTML, CSS, and JavaScript. I’ve developed interactive platforms like recipe app and fighting game that enhance user engagement and performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience designing efficient and secure backend systems using Node.js, Express.js, and MySQL/MongoDB. Designed and developed a full-stack blog application focusing on RESTful API design, JWT authentication, and database optimization for real-world projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programmer</h3>
              <p>
                As a passionate problem solver, I’ve solved 600+ DSA problems across various coding platforms. My strong foundation in Data Structures, Algorithms, and OOPs helps me tackle complex technical challenges effectively.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
