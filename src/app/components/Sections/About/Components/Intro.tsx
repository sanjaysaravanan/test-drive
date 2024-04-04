import React from "react";

import Image from "next/image";

import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.profilePic}>
      <Image
        src={"https://ik.imagekit.io/twsok8jou/sanjay-image.jpg"}
        alt="Me"
        width={300}
        height={300}
        style={{
          objectFit: "contain",
          borderRadius: "50%",
        }}
      />
      <p className={styles.introText}>
        I&apos;m a Software Developer for{" "}
        <a
          href="https://www.encora.com"
          className={styles.link}
          target="_blank"
        >
          Encora Inc
        </a>{" "}
        in India, Bengaluru.
        <br /> I have serious passion for UI & API Development, basic DevOps &
        Cloud services.
        <br />
        <a
          href="https://ik.imagekit.io/twsok8jou/SanjaySaravanan.pdf"
          target="_blank"
          style={{
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          View / Download Resume
        </a>
      </p>
    </div>
  );
};

export default Intro;
