import React from 'react';
import styles from './Header.module.css';

import { FiGithub } from 'react-icons/fi';
import { IoMdMail } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  return (
    <section className={styles.Header}>
      <p className={styles.logo}>
        <span className={styles.text}>
          <span className={styles.marker}>W</span> 
          App 
        </span>
      </p>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <a href="mailto:artembilas@gmail.com" className={styles.link}>
            <IoMdMail />
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://github.com/ArtemBilas" className={styles.link}>
            <FiGithub />
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://www.linkedin.com/feed/" className={styles.link}>
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Header;