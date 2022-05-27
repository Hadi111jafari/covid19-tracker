import { fetchAllCases } from '../../APIs/CovidAPI';
import { uptoNow } from '../../Logic/Date';
import getMapUrl from '../../APIs/MapsAPI';

const GET_COUNTRIES = 'Covid19_Tracker/countries/GET_COUNTRIES';

let Loading = false;

const sendCountries = (countries) => ({
  type: GET_COUNTRIES,
  payload: countries,
});

const getCountries = () => async (dispatch) => {
  if (Loading) return;
  const data = await fetchAllCases();
  const countriesList = data.dates[uptoNow].countries;
  const allCountries = data.total;
  const mappedAllCountries = {
    id: allCountries.name,
    name: 'All Countries',
    image: getMapUrl('world'),
    today_confirmed: allCountries.today_confirmed.toLocaleString(),
  };
  const countriesMappedList = Object.keys(countriesList).map((key) => ({
    id: key,
    name: countriesList[key].name,
    image: getMapUrl(countriesList[key].name.toLowerCase()),
    today_confirmed: countriesList[key].today_confirmed.toLocaleString(),
  }));
  countriesMappedList.unshift(mappedAllCountries);
  dispatch(sendCountries(countriesMappedList));
  Loading = true;
};

const covidCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export { getCountries, GET_COUNTRIES, sendCountries };
export default covidCountriesReducer;
