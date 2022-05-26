import getMapUrl from '../APIs/MapsAPI';

const constructor = (obj) => {
  let newObj = {};
  newObj = {
    id: obj.name,
    name: 'All Countries',
    image: getMapUrl('world'),
    today_confirmed: obj.today_confirmed.toLocaleString(),
    today_deaths: obj.today_deaths.toLocaleString(),
    today_recovered: obj.today_recovered.toLocaleString(),
    source: obj.source,
    today_open_cases: obj.today_open_cases,
  };

  return newObj;
};

export default constructor;
