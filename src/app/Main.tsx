'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import Section from './components/Section/Section';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';

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

export default function Main() {
  const [page, setPage] = useState('HOME');
  const [menuOpen, setMenuOpen] = useState(false);

  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);
  const refFive = useRef<HTMLDivElement>(null);
  const refSix = useRef<HTMLDivElement>(null);

  const navs = [
    { name: 'HOME', ref: refOne },
    { name: 'PROFILE', ref: refTwo, children: <About /> },
    { name: 'PROJECTS', ref: refThree },
    { name: 'GAMES', ref: refFour },
    { name: 'BLOGS', ref: refFive },
    { name: 'CONTACT', ref: refSix },
  ];

  function goToCurrent(currRef: React.RefObject<HTMLDivElement>) {
    console.log('Inside the Go to Ref Function');
    console.log(currRef.current);
    if (currRef.current) {
      currRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
    setMenuOpen(false);
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

  const renderMenuItems = (isMobile: boolean) => {
    return navs.map(({ name, ref }) => (
      <React.Fragment key={name}>
        <NavItem
          name={name}
          key={name}
          clickFunc={() => goToCurrent(ref)}
          highlight={name === page}
        />
        {!isMobile && <input
          type="radio"
          id={`rad-${name.toLowerCase()}`}
          name={`rad-${name.toLowerCase()}`}
          checked={name === page}
          readOnly
        />}
      </React.Fragment>
    ))
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
      <Section title='HOME' currRef={refOne} isHome={true} >
        <Home toRef={refTwo} refFunc={goToCurrent} />
      </Section>
      <div className={styles.header}>
        <div className={styles.headerBox} >
          {renderMenuItems(false)}
          <div className={styles.slider} >
          </div>
        </div>
        <div className={styles.headerBoxMobile} >
          <button
            className={styles.noBorderBtn}
            onClick={() => {
              if (menuOpen) {
                setMenuOpen(false);
              } else {
                setMenuOpen(true);
              }
            }}
          >
            <i className={`fa-solid fa-bars fa-3x ${styles.menuIcon}`} ></i>
          </button>
        </div>
        <div
          className={styles.menuBox}
          style={{ height: menuOpen ? '180px' : 0 }}
        >
          {renderMenuItems(true)}
        </div>
      </div>
      {navs.slice(1).map(({ name, ref, children }) => (
        <Section title={name} currRef={ref} key={name} isHome={false}>
          {children}
        </Section>
      ))}
    </>
  );
}
