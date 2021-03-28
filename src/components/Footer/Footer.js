import React from 'react';
import styles from './Footer.module.css';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.Footer}>
      <p className={styles.Copyright}>
        <AiOutlineCopyrightCircle />
        By Myself &nbsp;
        {currentYear}
      </p>
    </footer>
  );
}

export default Footer;