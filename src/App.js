import './App.css';
import React, {useState, useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios';
import styled from "styled-components"

const API_URL = 'https://rickandmortyapi.com/api/character';
// ?page=2 copy this part to end of api to change page.

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    const fetchRickMortyAPI = () => {
      axios
      .get(API_URL)
      .then((res) =>{
        setCharacters(res.data.results)
        
      })
      .catch((err)=>{
        console.log('404!')
      });
    }
    fetchRickMortyAPI();
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // console.log(characters[1])

  return (
    <div className="App">
      <StyledH1>
      Characters From Rick and Morty
      </StyledH1>
      <StyledCharacterDiv>
          {characters.map(characters =>{
            return <Character key={characters.id} character={characters}/>
          })}
      </StyledCharacterDiv>
    </div>
  );
}

export default App;

const StyledH1 = styled.h1`
font-size: 3rem;
  color: #fcf1f1;
  text-shadow: 1px 1px 5px #f9813a;
`

const StyledCharacterDiv = styled.div`
  margin: 2% 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`