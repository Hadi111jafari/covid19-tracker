import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRegions } from '../Redux/regions/RegionsReducer';
import TotalCases from '../Components/TotalCases';
import SearchItem from '../Components/SearchItem';
import RegionsList from '../Components/RegionsList';

const RegionContainer = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(getRegions(country));
  }, []);

  const [searchRegion, setSearchRegion] = useState('');

  const updateSearcRegion = (e) => {
    setSearchRegion(e.target.value);
  };

  const renderHeader = () => {
    if (state !== undefined && state.length !== 0) {
      return <TotalCases country={state} />;
    }
    return <p>loading</p>;
  };

  const renderRegions = () => {
    if (state.regions !== undefined && state.length !== 0) {
      return (
        <RegionsList regions={state.regions} searchRegion={searchRegion} />
      );
    }
    return <p>loading</p>;
  };

  return (
    <div className="regionsContainer">
      {renderHeader()}
      <SearchItem
        item="Region"
        searchItem={searchRegion}
        updateSearchItem={updateSearcRegion}
      />
      {renderRegions()}
    </div>
  );
};

export default RegionContainer;
