import regionsReducer, { GET_REGIONS } from '../Redux/regions/RegionsReducer';

describe('Get Regions', () => {
  test('should return a list of regions', () => {
    const initialState = [];
    const state = [
      {
        id: 'south_australia',
        name: 'South Australia',
        today_confirmed: '502166',
      },
      {
        id: 'queensland"',
        name: 'Queensland',
        today_confirmed: '1164781,',
      },
    ];

    const action = { type: GET_REGIONS, payload: state };
    const result = regionsReducer(initialState, action);
    expect(result).toEqual(state);
  });
});

describe('Check element id', () => {
  test('the id of a redion should match with initial state', () => {
    const initialState = [];
    const state = [
      {
        id: 'south_australia',
        name: 'South Australia',
        today_confirmed: '502166',
      },
      {
        id: 'queensland"',
        name: 'Queensland',
        today_confirmed: '1164781,',
      },
    ];

    const action = { type: GET_REGIONS, payload: state };
    const result = regionsReducer(initialState, action);
    const queensland = state[0].id;
    expect(result[0].id).toEqual(queensland);
  });
});
