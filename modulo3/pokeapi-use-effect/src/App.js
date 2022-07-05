import { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import poke from "./components/imagens/poke.jpg"
import pokeball from "./components/imagens/pokeball.gif"
import styled from "styled-components";


const Header = styled.div`
width: 100%
`

const Main = styled.div`
align-items: center;
text-align: center
`
const Body = styled.div`
display: flex;
justify-content: space-between;
`

const Nav = styled.div`
margin-left: 15px;
padding: 25px;
display: flex;
flex-direction: column;
font-size: xx-large;
font-family: align-self: start;
color: #F00C1F;
`

const Select = styled.select`
color: #4D85BD;
font-size: large;
`

const Img = styled.img`
width: 20%;
height: 60%;
margin: 20px 0 0 0
`

function App() {
   const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");


  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.error("Erro ao buscar Pokemon");
      });
  }, []);

  
  const changePokeName = (e) => {
    setPokeName(e.target.value);
  };

  // Passo 3e
  const pokeOptions = pokeList.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });


  const pokemon = true && <PokeCard pokeName={pokeName} />;

  return (
    <>
    
      <Header>
        <img src = {poke}/>
      </Header>
      <Body>
      <Nav>
        <label htmlFor={"select-pokemon"}><strong> Selecione um Pokemon: </strong></label>
        
        <Select id={"select-pokemon"}  onChange={changePokeName } >
          <option value={""}>Nenhum</option>
         
          {pokeOptions}
        </Select>
      </Nav>
      <Main>
        {pokemon}
      </Main>
      <Img src= {pokeball}/>
    </Body>
    </>
  );
};

export default App;
