import React from 'react'
import * as F from './styled'
import toque from './imagens/toque.png'


export default function Footer() {

  

      function spoiller() {
        alert('Youtube não tem Footer!');
      }

  return (
    <div>
        <hr/>
        <F.Container>
        <F.Texto>Alerta de Spoiler</F.Texto>
        <F.Button onClick={spoiller}> <F.Click src={toque}/></F.Button>
        </F.Container>
    </div>
  )
}
