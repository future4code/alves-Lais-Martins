import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
animation-duration: 8s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

const ContainerHead = styled.div`
height: 40px;
`


export default function Header () {

    return (
        <ContainerHead>
        <Logo>
        LABE-X
        </Logo>
        </ContainerHead>
    )

}