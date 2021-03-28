import React from 'react';
import styles from './ErrorLocation.module.css';

const ErrorLocation = () => {
  return (
    <section>
      <p className={styles.ErrorLocation}>
        Geolocation disabled, use search
      </p>
    </section>
  );
}

export default ErrorLocation;