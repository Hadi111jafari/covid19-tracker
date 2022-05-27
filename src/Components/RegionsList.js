import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RegionItem from './RegionItem';

const RegionsList = (props) => {
  const { regions, searchRegion } = props;
  const [availableRegions, setAvailableRegions] = useState(regions);

  useEffect(() => {
    setAvailableRegions(regions);
  }, [regions]);

  useEffect(() => {
    const emptySearch = searchRegion.toLowerCase().trim();
    setAvailableRegions(
      regions.filter((region) => {
        const regionName = region?.name.toLowerCase();
        return regionName.includes(emptySearch);
      }),
    );
  }, [searchRegion]);

  const renderRegions = () => {
    if (availableRegions !== undefined && availableRegions.length !== 0) {
      return availableRegions?.map((item) => (
        <RegionItem key={item.name} region={item} />
      ));
    }
    return <p className="notFound">No Regions Available</p>;
  };

  return <div className="regionsList">{renderRegions()}</div>;
};

RegionsList.propTypes = {
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      today_confirmed: PropTypes.number,
      today_deaths: PropTypes.number,
      today_recovered: PropTypes.number,
      source: PropTypes.string,
      today_open_cases: PropTypes.number,
    }),
  ).isRequired,
  searchRegion: PropTypes.string.isRequired,
};

export default RegionsList;
