import React from 'react';

import styles from './contact.module.css';
import Slider from '../Slider/Slider';

const Contact = () => {
  return (
    <Slider type='zoom-in'>
      <div
        className={styles.container}
      >
        <h3>Have a question or doubt?</h3>
        <form
          className={styles.formContainer}
        >
          <input type='text' id="name" name="name" placeholder='Name' />
          <input type="email" id="email" name="email" placeholder='Email' />
          <input type="text" id="phone" name="phone" placeholder='Phone' />
          <textarea
            rows={5}
            name='message'
            placeholder='Type your doubt or question...'
          ></textarea>
          <button
            type='submit'
            className='noBorderBtn viewLink'
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Slider>
  );
}

export default Contact;