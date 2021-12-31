import React from 'react';

import Weather from './Weather';

const showCountryList = (filteredCountries, setFilter) => {
  return (
    <ul>
      {filteredCountries.map((country) => (
        <li key={country.name}>
          {country.name}{' '}
          <button
            onClick={() => {
              return setFilter(country.name);
            }}
          >
            show
          </button>
        </li>
      ))}
    </ul>
  );
};

const ShowSingleCountry = (country) => {
  return (
    <div>
      <h1>{country.name}</h1>
      region {country.region}
      <br />
      capital {country.capital}
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={'flag'} style={{ maxWidth: 200 }} />
      <h2>Weather in {country.name}</h2>
      <Weather country={country} />
    </div>
  );
};

const CountryData = (props) => {
  const filteredCountries = props.countries.filter((country) =>
    country.name.toLowerCase().includes(props.filter.toLowerCase())
  );
  const countryCount = filteredCountries.length;

  if (countryCount > 10) {
    return 'Too many matches, specify another filter';
  }

  if (countryCount > 1) {
    return showCountryList(filteredCountries, props.setFilter);
  }

  if (countryCount === 1) {
    const country = filteredCountries[0];
    return ShowSingleCountry(country);
  }

  return 'No matches';
};

export default CountryData;
