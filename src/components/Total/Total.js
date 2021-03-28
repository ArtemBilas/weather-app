import React from 'react';
import styles from './Total.module.css';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Loading from '../Loading/Loading';

const Total = (props) => {
  const content = Object.keys(props).length === 0 ? <Loading /> : <CurrentWeather {...props} />

  return (
    <main className={styles.Total}>
      {content}
    </main>
  );
}

export default Total;