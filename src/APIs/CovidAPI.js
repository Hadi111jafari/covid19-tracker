import { uptoNow } from '../Logic/Date';

const covidUrl = 'https://api.covid19tracking.narrativa.com/api';

const fetchAllCases = async () => {
  const res = await fetch(`${covidUrl}/${uptoNow}`);
  const data = await res.json();
  return data;
};

const fetchRegionsCases = async (country) => {
  const response = await fetch(`${covidUrl}/${uptoNow}/country/${country}`);
  const data = await response.json();
  return data;
};

export { fetchAllCases, fetchRegionsCases };
