import React from 'react'
import { useState } from "react"
import Contador from './components/Contador'
import Comentario from './components/Comentario'
import Header from './components/Header'
import Post from './components/Post'
import styled from 'styled-components'

const CardPrincipal = styled.div`
width: 50%;
margin: 0 25% 0 25%;
border: 2px solid black;
border-radius: 7%;
padding: 20px;
box-shadow: 10px 5px 5px gray;
`

export default function App() {
  const [valorContador, setValorContador] = useState(0);

  const soma = () => {
    setValorContador(valorContador + 1);
  };
  const subtrai = () => {
    setValorContador(valorContador - 1);
  };

  return (
    <CardPrincipal>
      <Header />
      <Post />
      <Contador valorContador={valorContador} soma={soma} subtrai={subtrai} />
      <Comentario />
    </CardPrincipal>
  );
};
