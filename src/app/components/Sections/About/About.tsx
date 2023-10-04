import React from 'react';
import Slider from '../Slider/Slider';

import styles from './about.module.css';
import Intro from './Components/Intro';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';

const About = () => {
  return (
    <div className={styles.container} >
      <Experience />
      <div className={styles.introChild} >
        <Slider type="from-left">
          <Intro />
        </Slider>
      </div>
      <div className={styles.introChild} >
        <Slider type="from-right">
          <Skills />
        </Slider>
      </div>
    </div>
  )
}

export default About;
