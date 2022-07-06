import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const Card = styled.div`
border: 5px solid #4D85BD;
border-style: dotted;
border-radius: 15%;
box-shadow: 10px 5px 5px #4E85BD;
width: 130%;
height: 80%;
padding: 15px;
font-size: xx-large;
background-color: #F2EBCB;
`

const Meio = styled.div`
display: flex;
justify-content: space-between;
font-size: large;
`

const P = styled.p`
color: #506070
`


function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokeName)
  })

  
      const pegaPokemon = (pokeName) => {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      )
        .then((res) => {
          setPokemon(res.data);
        })
        .catch((err) => {
          console.error("Erro ao buscar dado");
        });
    }
  

  return (
    <Card >
     
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
     <Meio>
      <P>{pokemon.weight} Kg</P>
      
      <P>Tipo: {pokemon.types && pokemon.types[0].type.name}</P>
      </Meio>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </Card>
  );
};

export default PokeCard;
