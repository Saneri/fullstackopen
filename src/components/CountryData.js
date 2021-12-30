import React from "react";

const CountryData = (props) => {
  const filteredCountries = props.countries.filter((country) =>
    country.name.toLowerCase().includes(props.filter.toLowerCase())
  );
  const countryCount = filteredCountries.length;

  if (countryCount > 10) {
    return "Too many matches, specify another filter";
  }

  if (countryCount > 1) {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  }

  if (countryCount === 1) {
    const country = filteredCountries[0];
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
        <img src={country.flag} alt={"flag"} style={{ maxWidth: 200 }} />
      </div>
    );
  }

  return "No matches";
};

export default CountryData;
