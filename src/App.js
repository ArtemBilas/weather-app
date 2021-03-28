import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

import axios from 'axios';
import Total from './components/Total/Total';
import ErrorLocation from './components/ErrorLocation/ErrorLocation';
import ErrorCityName from './components/ErrorCityName/ErrorCityName';
import SearchPanel from './components/SeatchPanel/SearchPanel';
import Layout from './components/Layout/Layout';
import CitysWeather from './components/CitysWeather/CitysWeather';

function App() {

  const [geoData, setGeoData] = useState({});
  const [loaded, setLoaded] = useState(true);
  const [wrongSearch, setWrongSearch] = useState(false);
  const [offLocation, setOffLocation] = useState(false);
  const key = process.env.REACT_APP_API_KEY;

  console.log(key);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const location = pos.coords;
      fetchData(key, location);
    }, err => {
      if (err.code === err.PERMISSION_DENIED) {
        onSearch('paris');
        setOffLocation(true);
      }
    });
  }, []);

  const fetchData = async (APIKey, position) => {
    try {
      const { latitude, longitude } = position;
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`);
      setGeoData(response.data);
    } catch (err) {
      setLoaded(false);
    }
  }

  const searchFetchData = async (APIKey, searchCity) => {
    setWrongSearch(false);
    setOffLocation(false);

    try {
      const searchResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${APIKey}&units=metric`);
      setGeoData(searchResponse.data);
    } catch (err) {
      setLoaded(false);
      if (err.message === `Request failed with status code 404`) {
        setWrongSearch(true);
      }
    }
  }

  const onSearch = (city) => {
    searchFetchData(key, city);
  }

  const wrongCityName = wrongSearch ? <ErrorCityName /> : null;
  const disabeldLocation = offLocation ? <ErrorLocation /> : null;

  return (
    <section className={styles.App}>
      <Layout >
        <section className={styles.content}>
          <SearchPanel onSearch={onSearch} />
          <CitysWeather onSearch={onSearch} />
          {disabeldLocation}
          {wrongCityName}
          <Total 
            {...geoData}
          />
        </section>
      </Layout>
    </section>
  );
}

export default App;
