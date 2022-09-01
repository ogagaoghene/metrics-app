import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllData } from '../redux/continent';
import {
  GridContainer, MapBackground, Arrow, Title, Card, SearchBar,
} from '../components/Styles/ContinentsStyle';
import Imagen from '../components/images/mapa-mundi.png';

function Home() {
  const continents = useSelector((state) => state.reduContinent);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData);
  }, []);

  const [cont, setcont] = useState(false);
  const onChangeEvent = (e) => {
    const textInput = e.target.value.toLowerCase() || '';
    const newStr = textInput[0].toUpperCase().concat(textInput.slice(1, textInput.length)) || '';
    setcont(continents.filter(
      (continent) => continent.countries.includes(newStr),
    ));
  };

  return (
    <div>
      <MapBackground>
        <Title>
          Covid-19 Metrics
        </Title>
        <img src={Imagen} alt="mapa-mundi" width={400} />
      </MapBackground>
      <SearchBar type="text" name="search" id="serchBar" placeholder="Search by country here" onChange={onChangeEvent} />
      <GridContainer>
        {cont && cont.length !== 0
          ? (
            <Card key={cont[0].continent}>
              <li style={{ position: 'relative', left: '4rem' }}>
                <Link to={`/country/${cont[0].id}`}>
                  <Arrow />
                </Link>
              </li>
              <li><h2>{cont[0].continent}</h2></li>
              <li>
                <strong>Cases:</strong>
                {cont[0].cases}
              </li>
              <li>
                <strong>Deaths:</strong>
                {cont[0].deaths}
              </li>
            </Card>
          )
          : continents.map((continent) => (
            <Card key={continent.id}>
              <li style={{ position: 'relative', left: '4rem' }}>
                <Link to={`/country/${continent.id}`}>
                  <Arrow />
                </Link>
              </li>
              <li><h2>{continent.continent}</h2></li>
              <li>
                <strong>Cases:</strong>
                {continent.cases}
              </li>
              <li>
                <strong>Deaths:</strong>
                {continent.deaths}
              </li>
            </Card>
          ))}
      </GridContainer>
    </div>
  );
}

export default Home;
