import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-self: center;
justify-content: center;
margin: 2rem auto;
width: 90%;
padding: 15px;
border: 1px solid white;
border-radius: 5px;
`;

export const List = styled.select`
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
padding: 0.5rem;
margin: 2rem;
width: 60%;
`;

export const Button = styled.button`
  padding: 0.5rem;
  color: rgb(236,76,138);
  border: rgb(236,76,138) 1px solid;
  background: #000;
  border-radius: 5px;
  margin: 2rem 0;
  align-self: center;
  width: 60%;
  &:hover {
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    box-shadow: 2px 2px 10px rgb(236,76,138);

  }
`;

export const InfoCtry = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 5px;
  justify-content: space-between;
  width: 75%;
  list-style: none;
  background: rgb(236,76,138);
  color: white;
  padding: 2rem;
`;
