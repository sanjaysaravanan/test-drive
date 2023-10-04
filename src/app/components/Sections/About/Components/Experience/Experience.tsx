import Image, { StaticImageData } from 'next/image';
import React from 'react';

import styles from './experience.module.css';
import FEImage from '../../../../../assets/FrontEnd.jpg';
import Slider from '../../../Slider/Slider';

type ExpProps = {
  image: string,
  years?: number,
  skills?: string[],
  text?: string,
  title: string,
}

const SkillExperience: React.FC<ExpProps> = ({ years, image, title }) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        style={{
          objectFit: 'cover',
          borderRadius: '50%'
        }}
      />
      <h3>{title}</h3>
    </div>
  );
};

const Experience = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.item}>
        <Slider type='from-left'>
          <SkillExperience title="Front-End" image={'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/master/src/app/assets/sanjay.jpg'} />
        </Slider>
      </div>
      <div className={styles.item}>
        <Slider type='zoom-in'>
          <SkillExperience title="Back-End" image={'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/master/src/app/assets/sanjay.jpg'} />
        </Slider>
      </div>
      <div className={styles.item}>
        <Slider type='from-right'>
          <SkillExperience title="Basic DevOps & Cloud" image={'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/master/src/app/assets/sanjay.jpg'} />
        </Slider>
      </div>
    </div>
  )
}

export default Experience;