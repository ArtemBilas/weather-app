import React from 'react';
import styles from './CurrentWeather.module.css';

import { FaTemperatureLow, FaSearchLocation } from 'react-icons/fa';
import { IoWater, IoTime } from 'react-icons/io5';
import { FiWind } from 'react-icons/fi';
import { CgCompressV } from 'react-icons/cg';
import { WiSunrise, WiSunset } from 'react-icons/wi';

const CurrentWeather = (props) => {
  const { city, list } = props;

  const convertToDate = (seconds) => {
    const toNumber = Number(seconds);
    const toDate = new Date(toNumber * 1000).toISOString().substr(11, 8);
    return toDate;
  }

  return (
    <section className={styles.CurrentWeather}>
      <h3>Current Weather</h3>
      <section className={styles.DataContainer}>
        <ul className={styles.Parameters}>
          <li className={styles.City}>
            <FaSearchLocation />
            <span>
              {city.name}
            </span>
          </li>
          <li className={styles.Temperatur}>
            <FaTemperatureLow />
            <span>
              {list[0].main.temp.toFixed()} ℃
              &nbsp;
              {list[0].weather[0].main}
            </span>
          </li>
          <li className={styles.RealFeels}>
            Real Feel: &nbsp;
            {list[0].main.feels_like.toFixed()} ℃
          </li>

          <li className={styles.Date}>
            <IoTime />
            <span>
              {list[0].dt_txt.replace(' ', '\n')}
            </span>
          </li>
        </ul>

        <ul className={styles.Additionally}>
          <li>
            <IoWater />
            <span>
              Humidity: &nbsp;
              {list[0].main.humidity} %
            </span>
          </li>
          <li>
            <FiWind />
            <span>
              Wind:&nbsp;
              {list[0].wind.speed.toFixed()} km/h
            </span>
          </li>
          <li>
            <CgCompressV />
            <span>
              Pressure: &nbsp;
              {list[0].main.pressure} mb
            </span>
          </li>
          <li>
            <WiSunrise />
            <span>
              Sunrise:&nbsp;
              {convertToDate(city.sunrise)}
            </span>
          </li>
          <li>
            <WiSunset />
            <span>
              Sunset: &nbsp;
              {convertToDate(city.sunset)}
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default CurrentWeather;