import React from 'react';

import styles from './Home.module.css';


type HomeProps = {
  toRef: React.RefObject<HTMLDivElement>,
  refFunc: (ref: React.RefObject<HTMLDivElement>) => void,
}

const Home: React.FC<HomeProps> = ({ toRef, refFunc }) => {
  return (
    <>
      <div className={styles.homeText}  >
        Hello, I&apos;m <span className={styles.homeTextHighlight} >Sanjay Saravanan</span>.
        <br />
        I&apos;m a full-stack developer.
        <br />
        <button
          type='button'
          className={styles.viewBtn}
          onClick={() => refFunc(toRef)}
        >
          View my work&nbsp;
          <i className={`fa-solid fa-arrow-right ${styles.classIcon}`}></i>
        </button>
      </div>
      <canvas className={styles.canvas} />
    </>
  );
}

export default Home;