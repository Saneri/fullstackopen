import axios from 'axios';
import React, { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY || '';

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const params = {
      access_key: API_KEY,
      query: country.capital
    };
    axios.get('http://api.weatherstack.com/current', { params }).then((res) => {
      setWeather(res.data.current);
    });
  }, [country]);

  if (!weather) return 'Loading weather data...';
  console.log(weather);
  return (
    <div>
      <div>
        <b>temperature: </b>
        {weather.temperature} Celsius
      </div>
      <img
        src={weather.weather_icons ? weather.weather_icons[0] : ''}
        alt={`${country.name} weather`}
        style={{ maxWidth: 100 }}
      />
      <div>
        <b>wind: </b>
        {weather.wind_speed} mph direction {weather.wind_dir}
      </div>
    </div>
  );
};

export default Weather;
