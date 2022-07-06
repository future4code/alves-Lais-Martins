import React from 'react'
import styled from 'styled-components'
import perfil from './imagens/alperfil.png'

const FotoPerfil = styled.img`
display: flex;
width: 50px;
height: 50px;

`
const ConatinerHeader = styled.div`
display: flex;
`
const Nome = styled.p`
display: flex;
font-size: large;
font-family: cursive;
`

export default function Header() {
  return (
    <ConatinerHeader>
        <FotoPerfil src = {perfil}/>
        <Nome><strong> Alyssa Barden</strong></Nome>
    </ConatinerHeader>
  )
}
