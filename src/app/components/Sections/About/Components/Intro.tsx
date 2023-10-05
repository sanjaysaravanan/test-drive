import React from 'react';

import Image from 'next/image';

import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.profilePic}>
      <Image
        src={'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/master/src/app/assets/sanjay.jpg'}
        alt="Me"
        width={300}
        height={300}
        style={{
          objectFit: 'cover',
          borderRadius: '50%'
        }}
      />
      <p className={styles.introText} >
        I&apos;m a Software Developer for {' '}
        <a
          href='https://www.encora.com'
          className={styles.link} >
          Encora Inc
        </a> {' '}
        in India, Bengaluru.<br /> I have serious passion for UI & API Development, basic DevOps & Cloud services.
      </p>
    </div>
  )
};

export default Intro;