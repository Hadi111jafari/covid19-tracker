import renderer from 'react-test-renderer';
import appComponentMock from '../__mocks__/index';
import * as Redux from '../Redux/countries/CountriesReducer';
import '@testing-library/jest-dom';
import countries from '../__mocks__/countries.mock';

jest.spyOn(Redux, 'getCountries')
  .mockImplementation(() => (Redux.dispatchCountries(countries)));

describe('Render App', () => {
  test('Assert snapshot', () => {
    const appSnap = renderer.create(
      <appComponentMock />,
    ).toJSON();
    expect(appSnap).toMatchSnapshot();
  });
});
