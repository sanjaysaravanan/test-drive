import Image, { StaticImageData } from 'next/image';
import React from 'react';

import styles from './experience.module.css';
import FEImage from '../../../../../assets/FrontEnd.jpg';
import awsIcon from '../../../../../assets/aws.svg';
import Slider from '../../../Slider/Slider';

import { skills as data } from '@/app/data';

type skill = {
  icon: string,
  height: number,
  width: number,
  title: string,
}

type ExpProps = {
  image: string,
  years?: number,
  skills?: skill[],
  text?: string,
  title: string,
}

const SkillExperience: React.FC<ExpProps> = ({ years, image, title, text, skills }) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        style={{
          objectFit: 'contain',
          borderRadius: '50%',
          border: '1px solid #d9d9d9'
        }}
      />
      <h3>{title}</h3>
      <p>
        {years && <b>{years}+</b>} {text}
      </p>
      {skills && (<div
        className={styles.skillsContainer}
      >{skills.map(({ icon, title, height, width }) => <Image
        src={icon}
        alt={title}
        title={title}
        height={height}
        key={title}
        width={width}
        style={{ margin: '0 4px' }}
      />)}
      </div>)}
    </div>
  );
};

const Experience = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.item}>
        <Slider type='from-left'>
          <SkillExperience
            title="Front End"
            image={'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/master/src/app/assets/FrontEnd.jpg'}
            years={4}
            text={'Years of experience'}
            skills={data.filter(({ type }) => type === 'front-end')}
          />
        </Slider>
      </div>
      <div className={styles.item}>
        <Slider type='zoom-in'>
          <SkillExperience
            title="Back End"
            image={'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/master/src/app/assets/BackEnd.jpg'}
            years={3.5}
            text={'Years of experience'}
            skills={data.filter(({ type }) => type === 'back-end')}
          />
        </Slider>
      </div>
      <div className={styles.item}>
        <Slider type='from-right'>
          <SkillExperience
            title="Basic DevOps & Cloud"
            image={'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/master/src/app/assets/DevOps.jpg'}
            text={'Hands on experience'}
            skills={data.filter(({ type }) => type === 'devops-cloud')}
          />
        </Slider>
      </div>
    </div>
  )
}

export default Experience;