import React from 'react'
import styled from 'styled-components'
import labex from './imagens/labex.png'

const ContainerHead = styled.div`
background-color: black;
color: white;
text-align: center;
font-size: x-large;
height: 50px;
padding: 1px;
`
const Img = styled.img`
width: 150px;
`


export default function Header () {

    return (
        <ContainerHead>
        <Img src={labex}/>
        </ContainerHead>
    )

}