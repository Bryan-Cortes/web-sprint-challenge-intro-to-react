import './App.css';
import React, {useState, useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios';
import styled from "styled-components"

const API_URL = 'https://rickandmortyapi.com/api/character';
// ?page=2 copy this part to end of api to change page.
const API_PAGE = '?page=';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [nextPage,setNextPage] = useState(1);
  

  useEffect(()=>{
    const fetchRickMortyAPI = () => {
      axios
      .get(`${API_URL}${API_PAGE}${nextPage}`)
      .then((res) =>{
        setCharacters(res.data.results)
        
      })
      .catch((err)=>{
        console.log('404!')
      });
    }
    fetchRickMortyAPI();
  }, [nextPage]);




  const buttonPageIncrease = () => {
    setNextPage(nextPage + 1)
  };

  const buttonPageDecrease = () => {
    setNextPage(nextPage - 1)
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // console.log(characters[1])

  return (
    <div className="App">
      <StyledH1>
        Characters From Rick and Morty
      </StyledH1>

      <StyledButtons> 
        { nextPage !== 1 ? <button onClick={buttonPageDecrease}>Previous Page</button> : null }
        <button onClick={buttonPageIncrease}>Next Page</button>
      </StyledButtons>
      
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
const StyledButtons = styled.button`
  background-color: ${(props) =>  props.theme.backGroundColor};
  width: 45%;
  border: none;
  button{
    background-color: ${(props) =>  props.theme.thirdColor};
    margin: 2% 5%;
    border-radius: 10px;
    padding: 3%;
    font-weight: bold;
    font-size: 1.1rem;
    color: ${(props) =>  props.theme.primaryColor};
    
  };
  
`