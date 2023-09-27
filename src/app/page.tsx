import React from 'react';

import Home from './Home';
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
};
