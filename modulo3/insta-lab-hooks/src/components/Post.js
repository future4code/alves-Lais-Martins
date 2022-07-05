import React from 'react'
import styled from 'styled-components'
import alyssa from './imagens/alyssa.jpg'

const EditandoPost = styled.img`
width: 100%;
`

export default function Post(fotoPost) {
  return (
    <div>
       <EditandoPost src = {alyssa}/>
    </div>
  )
}
