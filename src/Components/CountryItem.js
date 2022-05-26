import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import imageRendering from './ImageRenderer';

const CountryDataItem = (props) => {
  const { country } = props;

  return (
    <NavLink to={`/${country.id}`} className="countryItem">
      {imageRendering(country, 'country')}
      <div className="countryInfo">
        <p className="countryName">{country.name}</p>
        <p>
          <span>{country.today_confirmed}</span>
          {' '}
          cases
        </p>
      </div>
    </NavLink>
  );
};

CountryDataItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    today_confirmed: PropTypes.string,
  }).isRequired,
};

export default CountryDataItem;
