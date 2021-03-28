import React from 'react';
import styles from './ErrorCityName.module.css';

const ErrorCityName = () => {
  return(
    <p className={styles.ErrorCityName}>
      Wrong city name! Type one more time.
    </p>
  );
}

export default ErrorCityName;