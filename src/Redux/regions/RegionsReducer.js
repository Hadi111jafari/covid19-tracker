import { fetchRegionsCases } from '../../APIs/CovidAPI';
import { uptoNow } from '../../Logic/Date';
import getMapUrl from '../../APIs/MapsAPI';

const GET_REGIONS = 'Covid19_Tracker/countries/GET_REGIONS';

const getRegions = (country) => async (dispatch) => {
  const data = await fetchRegionsCases(country);
  const result = { countryData: data.dates[uptoNow].countries };
  const regions = result.countryData[country];
  const mappedRegions = {
    id: regions.id,
    name: regions.name,
    image: getMapUrl(regions.id),
    regions: regions.regions,
    today_confirmed: regions.today_confirmed.toLocaleString(),
    today_deaths: regions.today_deaths.toLocaleString(),
    today_recovered: regions.today_recovered.toLocaleString(),
    source: regions.source,
    today_open_cases: regions.today_open_cases,
  };
  dispatch({
    type: GET_REGIONS,
    payload: mappedRegions,
  });
};

const covidRegionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;

    default:
      return state;
  }
};

export { getRegions, GET_REGIONS };
export default covidRegionsReducer;
