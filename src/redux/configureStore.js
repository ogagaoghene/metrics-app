import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduContinent from './continent';
import reduCountry from './country';

const rootReducer = combineReducers({
  reduContinent,
  reduCountry,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
