import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const RegionItem = (props) => {
  const { region } = props;

  return (
    <div className="regionItem">
      <p className="regionName">{region.name}</p>
      <div className="regionInfo">
        <p>{region.today_confirmed}</p>
        <Icon icon="bi:arrow-down-circle" rotate={3} className="regionArrow" />
      </div>
    </div>
  );
};

RegionItem.propTypes = {
  region: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
    today_deaths: PropTypes.number,
    today_recovered: PropTypes.number,
    source: PropTypes.string,
    today_open_cases: PropTypes.number,
  }).isRequired,
};

export default RegionItem;
