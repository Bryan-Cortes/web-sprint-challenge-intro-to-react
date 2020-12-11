// Write your Character component here
import React from 'react'
import styled from "styled-components"


export default function Character(props) {
  const {character} = props;

  
  return (
    <CharacterCard>
      
      <img src={character.image}/>

      <h2>{character.name} </h2>

      
      <p><span>Species:</span> {character.species}</p>
      <p><span>Gender:</span> {character.gender}</p>
      <p><span>Status:</span> {character.status}</p>
      <p><span>Origin:</span> {character.origin.name}</p>
    
    </CharacterCard>
  )
}

const CharacterCard = styled.div`
  margin: 2% 0;
  
  img{
    border-radius: 10px;
  }
  h2{
    color: ${(props) =>  props.theme.primaryColor};
    font-size: 2rem;

  };

  div {
    
  };

  p{
    color: ${(props) =>  props.theme.primaryColor};
    font-size: ${(props) =>  props.theme.fontSize};
  };

  span{
    color: ${(props) =>  props.theme.thirdColor}
  };

`