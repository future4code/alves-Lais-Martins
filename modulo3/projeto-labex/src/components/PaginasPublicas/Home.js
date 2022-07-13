import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import galaxia from './imagens/galaxia.gif'
import viagens from './imagens/viagens.png'
import admin from './imagens/admin.png'

const ContainerHome = styled.div`
display: flex;
background-color: black;
color: white;
align-items: center;
`
const Button = styled.button`
width: 100px;
height: 50px;
align-items: center;
margin-left: 50px;
border-bottom: 4px #332647;
border-style: dotted;
border-radius: 5%;
padding: 2px;
font-size: large;
background-color: black;
color: #A8A15B;
:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);}
`
const Img = styled.img`
width: 100px;
align-items: left;
`

export default function Home() {
  const navigate = useNavigate ()

  const vaiParaViagens = () => {
    navigate("/viagens")
  }

  const vaiParaLogin = () => {
    navigate("/login")
  }

       
  return (
    <ContainerHome>
      
      <Button onClick={vaiParaViagens}> <Img src={viagens}/> </Button>

      <img src= {galaxia}/>

      <Button onClick={vaiParaLogin}> <Img src={admin}/> </Button>
    </ContainerHome>
  )
}
