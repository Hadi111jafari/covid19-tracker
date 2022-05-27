import countriesReducer, { GET_COUNTRIES } from '../Redux/countries/CountriesReducer';

describe('Get Countries', () => {
  test('should return a list of countries', () => {
    const initialState = [];
    const state = [
      {
        id: 'afghanistan"',
        name: 'Afghanistan"',
        image: 'https://api.covid19tracking.narrativa.com/api/afghanistan"',
        today_confirmed: '179,835',
      },
      {
        id: 'albania',
        name: 'Albania',
        image: 'https://api.covid19tracking.narrativa.com/api/albania',
        today_confirmed: '276,012',
      },
    ];

    const action = { type: GET_COUNTRIES, payload: state };
    const result = countriesReducer(initialState, action);
    expect(result).toEqual(state);
  });
});

describe('Check element id', () => {
  test('the id of a country should match with initial state', () => {
    const initialState = [];
    const state = [
      {
        id: 'afghanistan"',
        name: 'Afghanistan"',
        image: 'https://api.covid19tracking.narrativa.com/api/afghanistan"',
        today_confirmed: '179,835',
      },
      {
        id: 'albania',
        name: 'Albania',
        image: 'https://api.covid19tracking.narrativa.com/api/albania',
        today_confirmed: '276,012',
      },
    ];

    const action = { type: GET_COUNTRIES, payload: state };
    const result = countriesReducer(initialState, action);
    const afghanistan = state[1].id;
    expect(result[1].id).toEqual(afghanistan);
  });
});
