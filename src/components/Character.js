import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

function Character({ character }) {
  return (
    <Wrapper>
      <h1> {character.name} </h1>
      <p> {character.height} </p>
      <p> {character.mass }</p>
      <p> {character.hair_color}</p>
      <p> {character.skin_color} </p>
    </Wrapper>
  );
}

export default Character;
