import React, { useRef, useState, useEffect } from 'react';

import styles from './slider.module.css';

type SliderProps = {
  type: 'from-left' | 'from-right' | 'zoom-in' | 'zoom-out',
  children: string | React.JSX.Element | React.JSX.Element[]
}

const Slider: React.FC<SliderProps> = ({ type, children }) => {

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
      ref={elementRef}
      className={`${styles.hidden} ${styles[type]} ${mounted ? styles.show : ''}`}
    >
      {children}
    </div>
  )
};

export default Slider;