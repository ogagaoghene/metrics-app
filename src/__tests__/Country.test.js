import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Country from '../pages/Country';
import store from '../redux/configureStore';
import { getCountryInfo } from '../redux/country';

describe('Test Country page', () => {
  test('Should match the snapshot', () => {
    const dom = render(
      <Provider store={store}>
        <Router>
          <Country />
        </Router>
      </Provider>,
    );
    expect(dom).toMatchSnapshot();
  });

  test('Should return an object with the info of the country', async () => {
    const countries = await getCountryInfo('Moroco');
    expect(countries.length).toBe(1);
  });
});
