import React from 'react';
import styles from './CitysWeather.module.css';

const CitysWeather = ({ onSearch }) => {
  const cityName = [
    'London',
    'New York',
    'Moscow',
    'Warsaw'
  ];

  const findCityWeather = (cityName) => {
    onSearch(cityName);
  }

  const content = cityName.map(item => {
    return (
      <button
        key={item}
        className={styles.city_item}
        onClick={() => findCityWeather(item)}
      >{item}</button>
    );
  });

  return (
    <section className={styles.city_container}>
      {content}
    </section>
  );
}

export default CitysWeather;