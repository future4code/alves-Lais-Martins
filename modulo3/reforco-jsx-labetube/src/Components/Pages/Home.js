import React from 'react'
import * as Z from './styled'
import lateral from './imagens/lateral.JPG'
import yt from './imagens/yt.png'

export default function Home() {

  function reproduzir() {
    alert('Vídeo Rodando! Inscreva-se no canal e deixe seu like 👍')
  }


  const titulo = " Este é um título padrão"

    return (
    <Z.Body>

      <Z.ContainerLateral>
      <Z.Lateral src={lateral}/>
      </Z.ContainerLateral>  

    <Z.ContainerCard>
      <Z.Card>
      <button onClick={reproduzir}><Z.Video src = {yt}/></button>
        <h3>{titulo}</h3>
      </Z.Card>
     
      <Z.Card>
      <button onClick={reproduzir}><Z.Video src = {yt}/></button>
        <h3>{titulo}</h3>
      </Z.Card>

      <Z.Card>
        <button onClick={reproduzir}><Z.Video src = {yt}/></button>
        <h3>{titulo}</h3>
      </Z.Card>

      <Z.Card>
      <button onClick={reproduzir}><Z.Video src = {yt}/></button>
        <h3>{titulo}</h3>
      </Z.Card>
      </Z.ContainerCard>

     
      
    </Z.Body>
  )
}
