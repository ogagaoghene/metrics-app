/* CONTINENTS */
const URL = 'https://disease.sh/v3/covid-19/continents';
const URLcountry = 'https://disease.sh/v3/covid-19/countries/';

const getAllContinents = async () => {
  const continents = [];
  await fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      result.map((continent) => (
        continents.push({
          id: continent.continent,
          continent: continent.continent,
          cases: continent.cases,
          todayCases: continent.todayCases,
          deaths: continent.deaths,
          todayDeaths: continent.todayDeaths,
          recovered: continent.recovered,
          todayRecovered: continent.todayRecovered,
          active: continent.active,
          critical: continent.critical,
          tests: continent.tests,
          population: continent.population,
          InfoLat: continent.continentInfo.lat,
          InfoLong: continent.continentInfo.long,
          countries: continent.countries,
        })));
    });
  return continents;
};

const getApiDataCountry = async (country) => {
  const object = await fetch(URLcountry)
    .then((response) => response.json())
    .then((data) => data.filter((obj) => obj.country === country))
    .then((info) => info.map((dta) => ({
      id: country,
      flag: dta.countryInfo.flag,
      cases: dta.cases,
      deaths: dta.deaths,
      recovered: dta.recovered,
      active: dta.active,
      critical: dta.critical,
      population: dta.population,
    })));
  return object[0];
};
export { getAllContinents, getApiDataCountry };
