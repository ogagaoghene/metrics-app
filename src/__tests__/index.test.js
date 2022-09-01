import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, act } from '@testing-library/react';
import App from '../App';
import store from '../redux/configureStore';

test('Should match the snapshot', async () => {
  const dom = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  await act(() => expect(dom).toMatchSnapshot());
});
