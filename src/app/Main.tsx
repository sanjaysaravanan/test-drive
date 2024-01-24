'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import Section from './components/Section/Section';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Projects from './components/Sections/Projects/Projects';
import Footer from './components/Sections/Footer/Footer';
import Contact from './components/Sections/Contact/Contact';
import Blogs from './components/Sections/Blogs/Blogs';
import Games from './components/Sections/Games/Games';
import AppContext from './AppContext';

type NavProps = {
  name: string,
  clickFunc: () => void,
  highlight: boolean
}

const NavItem: React.FC<NavProps> = ({ name, clickFunc, highlight }) => {
  return (
    <button
      className={`noBorderBtn ${styles.navItem} ${highlight ? styles.highlightNav : ''}`}
      onClick={clickFunc}
    >
      {name}
    </button>
  );
}

export default function Main() {
  const [page, setPage] = useState('HOME');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const [showLoading, setLoading] = useState(false);

  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);
  const refFive = useRef<HTMLDivElement>(null);
  const refSix = useRef<HTMLDivElement>(null);

  const navs = [
    { name: 'HOME', ref: refOne },
    { name: 'PROFILE', ref: refTwo, children: <About /> },
    { name: 'PROJECTS', ref: refThree, children: <Projects /> },
    { name: 'GAMES', ref: refFour, children: <Games /> },
    { name: 'BLOGS', ref: refFive, children: <Blogs /> },
    { name: 'CONTACT', ref: refSix, children: <Contact /> },
  ];

  function goToCurrent(currRef: React.RefObject<HTMLDivElement>) {
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

  const handleLoading = () => {
    setLoading((data) => !data);
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
            setScrollTop(obj.name !== 'HOME');
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
    <AppContext.Provider value={{ handleLoading }}>
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
            className='noBorderBtn'
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
      <Footer />
      {scrollTop && (
        <div className={styles.scrollToTop} onClick={() => goToCurrent(refOne)} >
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
      {showLoading && <div className={styles.overlay} >
        <i className="fa-solid fa-spinner fa-spin fa-3x"></i>
      </div>}
    </AppContext.Provider>
  );
}
