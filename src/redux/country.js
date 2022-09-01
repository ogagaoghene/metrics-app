import { getApiDataCountry } from '../components/Data/Data';

const GET_COUNTRY_INFO = 'metrics-webapp/country/GET_COUNTRY_INFO';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_COUNTRY_INFO:
      return action.payload;
    default:
      return state;
  }
}

export const getCountryInfo = (country) => async (dispatch) => {
  const countryInfo = await getApiDataCountry(`${country}`);
  dispatch({ type: GET_COUNTRY_INFO, payload: countryInfo });
};
