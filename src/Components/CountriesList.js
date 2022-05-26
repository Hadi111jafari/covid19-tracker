import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CountryDataItem from './CountryItem';

const CountriesDataList = (props) => {
  const { countries, searchCountry } = props;
  const [availableCountries, setAvailableCountries] = useState(countries);

  useEffect(() => {
    setAvailableCountries(countries);
  }, [countries]);

  useEffect(() => {
    const emptySearch = searchCountry.toLowerCase().trim();
    setAvailableCountries(
      countries.filter((country) => {
        const countryName = country.name.toLowerCase();
        return countryName.includes(emptySearch);
      }),
    );
  }, [searchCountry]);

  return (
    <div className="countriesList">
      {availableCountries?.map((item) => (
        <CountryDataItem key={item.id} country={item} />
      ))}
    </div>
  );
};

CountriesDataList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      today_confirmed: PropTypes.string,
    }),
  ).isRequired,
  searchCountry: PropTypes.string.isRequired,
};

export default CountriesDataList;
