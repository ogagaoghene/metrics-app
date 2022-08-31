import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '../pages/Home';
import store from '../redux/configureStore';
import { getAllContinents } from '../components/Data/Data';

describe('Test: Home page', () => {
  test('Should match the snapshot', () => {
    const dom = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(dom).toMatchSnapshot();
  });

  test('Should return an array with continents', async () => {
    const continents = await getAllContinents();
    expect(continents.length).toBe(6);
  });
});
