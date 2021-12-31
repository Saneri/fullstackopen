import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Filter from './components/Filter';
import CountryData from './components/CountryData';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const url = 'https://restcountries.com';
    axios.get(`${url}/v2/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <CountryData
        filter={filter}
        countries={countries}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
