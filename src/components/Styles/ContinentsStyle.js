import styled from 'styled-components';
import { FaRegArrowAltCircleRight } from '@react-icons/all-files/fa/FaRegArrowAltCircleRight';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: stretch;
  color: white;
  width: 100vw;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Arrow = styled(FaRegArrowAltCircleRight)`
  color: white;
  font-size: 1.8rem;
  &:hoverul {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.5);    
  }
`;

export const MapBackground = styled.div`
  width: 100vw;
  height: 35vh;
  background: linear-gradient(to right, #000, rgb(236,76,138));
`;

export const Title = styled.h1`
 color: white;
 font-weight: bold;
 width: 350px;
 margin: 0 auto;
 padding: 5px;
`;

export const Card = styled.ul`
  list-style: none;
  width: 100%;
  background: rgb(236,76,138);
  box-shadow: 1px 1px 20px black;
  padding: 2rem 1rem;
  margin: 0;
  &:hover {
    filter: contrast(1.2);
  }
`;

export const SearchBar = styled.input`
  width: 100vw;
  padding: 0.5rem;
  background: rgb(236,76,138, 0.8);
  color: white;
  font-size: large;
  &::placeholder {
    color: white;
  }
`;
