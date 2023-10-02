import React, { useEffect, useRef, useState } from 'react';

import styles from './section.module.css';

type SectionProps = {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => {
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
    <div className={styles.section} ref={sectionRef} >
      <h1 className={`${styles.hidden} ${onView ? styles.show : ''}`}>{title}</h1>
      <div className={`${styles.hidden} ${styles.line} ${onView ? styles.show : ''}`} ></div>
    </div>
  )
}

export default Section;