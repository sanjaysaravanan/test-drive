import React from 'react';
import Slider from '../Slider/Slider';

import styles from './about.module.css';

const About = () => {
  return (
    <Slider type="zoom-in">
      <div className={styles.container} />
    </Slider>
  )
}

export default About;
