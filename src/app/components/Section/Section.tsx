import React, { useEffect, useRef, useState } from 'react';

import styles from './section.module.css';

type SectionProps = {
  title: string;
  currRef: React.RefObject<HTMLDivElement>,
  isHome: boolean,
  children?: string | React.JSX.Element | React.JSX.Element[]
}

const Section: React.FC<SectionProps> = ({ title, currRef, isHome, children }) => {
  const sectionRef = useRef(null);
  const [onView, setOnView] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setOnView(true);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    }
  }, [sectionRef]);

  return (
    <div
      id={title}
      className={styles.layerOnCanvas}
      style={{
        borderTop: '2px solid #000',
      }}
      ref={currRef}
    >
      {isHome ? (
        children
      ) : (
        <div className={styles.section} ref={sectionRef} >
          <h1 className={`${styles.hidden} ${onView ? styles.show : ''}`}>{title}</h1>
          <div className={`${styles.hidden} ${styles.line} ${onView ? styles.show : ''}`} ></div>
          {children}
        </div>
      )}
    </div>
  )
}

export default Section;