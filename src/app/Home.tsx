'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import Section from './components/Section/Section';

type NavProps = {
  name: string,
  clickFunc: () => void,
  highlight: boolean
}

const NavItem: React.FC<NavProps> = ({ name, clickFunc, highlight }) => {
  return (
    <button
      className={`${styles.noBorderBtn} ${styles.navItem} ${highlight ? styles.highlightNav : ''}`}
      onClick={clickFunc}
    >
      {name}
    </button>
  );
}

export default function Home() {
  const [page, setPage] = useState('HOME');

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

  function goToCurrent(currRef: React.RefObject<HTMLDivElement>) {
    if (currRef.current) {
      currRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  const getDimensions = (ele: HTMLDivElement) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop - 200;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  }

  const scrollFunc = (e: Event) => {
    if (e.currentTarget) {
      const scrollPosition = (e.currentTarget as Window).scrollY;
      for (let i = 0; i < 6; i++) {
        const obj = { ...navs[i] };
        const ele = obj.ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          if (scrollPosition > offsetTop && scrollPosition < offsetBottom) {
            setPage(obj.name);
            break;
          }
        }
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('scroll', scrollFunc);
    return () => {
      window.removeEventListener('scroll', scrollFunc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.layerOnCanvas} ref={refOne} id="HOME" >
        <div className={styles.homeText}  >
          Hello, I&apos;m <span className={styles.homeTextHighlight} >Sanjay Saravanan</span>.
          <br />
          I&apos;m a full-stack developer.
          <br />
          <button
            type='button'
            className={styles.viewBtn}
            onClick={() => goToCurrent(refTwo)}
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
            <React.Fragment key={name}>
              <NavItem
                name={name}
                key={name}
                clickFunc={() => goToCurrent(ref)}
                highlight={name === page}
              />
              <input
                type="radio"
                id={`rad-${name.toLowerCase()}`}
                name={`rad-${name.toLowerCase()}`}
                checked={name === page}
                readOnly
              />
            </React.Fragment>
          ))}
          <div className={styles.slider} >
          </div>
        </div>
      </div>
      {navs.slice(1).map(({ name, ref }) => (
        <div key={name} id={name} className={styles.layerOnCanvas} style={{ borderTop: '2px solid #000' }} ref={ref}>
          <Section title={name} />
        </div>
      ))}
    </>
  );
}
