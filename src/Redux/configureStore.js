import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/CountriesReducer';
import regionsReducer from './regions/RegionsReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  regions: regionsReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
