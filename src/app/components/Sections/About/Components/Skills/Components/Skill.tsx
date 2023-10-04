import React, { useRef, useState, useEffect } from 'react';

import styles from './skill.module.css';

type SkillProps = {
  percent: number,
  title: string,
}

const Skill: React.FC<SkillProps> = ({ title, percent }) => {

  const elementRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setMounted(true);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    }
  }, [elementRef]);

  return (
    <div
      className={styles.container}
      ref={elementRef}
    >
      <div className={styles.titleTxt} >
        {title}
      </div>
      <div className={styles.percent}>
        <div
          className={styles.innerPercent}
          style={{
            width: `${mounted ? percent : 0}%`
          }}
        />
      </div>
      <h3 className={styles.percentTxt} >{percent}%</h3>
    </div>
  )
}

export default Skill;
