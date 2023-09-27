'use client';

import React, { useRef } from 'react';
import styles from './page.module.css';

type NavProps = {
  linkRef: React.RefObject<HTMLDivElement>,
  name: string,
}

const NavItem: React.FC<NavProps> = ({ linkRef, name }) => {
  const moveToReference = () => {
    if (linkRef.current) {
      linkRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }
  return (
    <button className={`${styles.noBorderBtn} ${styles.navItem}`} onClick={moveToReference} >{name}</button>
  );
}

export default function Home() {

  const refOne = useRef<HTMLDivElement>(null);

  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);
  const refFive = useRef<HTMLDivElement>(null);
  const refSix = useRef<HTMLDivElement>(null);

  const navs = [
    { name: 'HOME', ref: refOne },
    { name: 'ABOUT', ref: refTwo },
    { name: 'PROJECTS', ref: refThree },
    { name: 'GAMES', ref: refFour },
    { name: 'BLOG', ref: refFive },
    { name: 'CONTACT', ref: refSix },
  ];

  function goToCurrent() {
    if (refTwo.current) {
      refTwo.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <>
      <div className={styles.layerOnCanvas} ref={refOne} >
        <div className={styles.homeText}  >
          Hello, I&apos;m <span className={styles.homeTextHighlight} >Sanjay Saravanan</span>.
          <br />
          I&apos;m a full-stack developer.
          <br />
          <button
            type='button'
            className={styles.viewBtn}
            onClick={goToCurrent}
          >
            View my work&nbsp;
            <i className={`fa-solid fa-arrow-right ${styles.classIcon}`}></i>
          </button>
        </div>
        <canvas className={styles.canvas} />
      </div>
      <div className={styles.header}>
        <div className={styles.headerBox} >
          {navs.map(({ name, ref }) => (
            <NavItem linkRef={ref} name={name} key={name} />
          ))}
        </div>
      </div>
      {navs.slice(1).map(({ name, ref }) => <div key={name} className={styles.layerOnCanvas} ref={ref}></div>)}
    </>
  );
}
