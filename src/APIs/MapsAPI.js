const MapUrl = 'https://mapsvg.com/static/maps/geo-calibrated';

function getMapUrl(countryName) {
  return `${MapUrl}/${countryName}.svg`;
}

export default getMapUrl;
