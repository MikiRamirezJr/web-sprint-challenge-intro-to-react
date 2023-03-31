import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        console.log(response.data);
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  
  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
         {characters.map(character => (
          <Character character = { character } key={character.name} />
        
         )) }

        </Container>
      )}
    </>
  );
}

export default App;
