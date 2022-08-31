import { getApiDataCountry } from '../components/Data/Data';

// Actions types
const GET_COUNTRY_INFO = 'metrics-webapp/country/GET_COUNTRY_INFO';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_COUNTRY_INFO:
      return action.payload;

    default:
      return state;
  }
}

// Action Creators
export const getCountryInfo = (country) => async (dispatch) => {
  const countryInfo = await getApiDataCountry(`${country}`);
  // console.log(countryInfo);
  dispatch({ type: GET_COUNTRY_INFO, payload: countryInfo });
};
