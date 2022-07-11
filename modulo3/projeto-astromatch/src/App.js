import React, {useState} from 'react'
import TelaInicial from './components/TelaInicial'
import TelaMatches from './components/TelaMatches'
import astro from './components/imagens/astro.gif'
import styled from 'styled-components'


const Logo = styled.img`
width: 200px;
`
const Botao = styled.button`
border: 3px white;
border-radius: 100%;
background-color: purple;
color:white;
margin-right: 15px;
`

const Header = styled.div`
display: flex;
justify-content: space-between
`

export default function App() {
  const [tela, setTela] = useState("inicial");

  const mudarTela = () => {
    switch (tela) {
      case "inicial":
        return <TelaInicial vaiParaMatches={vaiParaMatches} />
      case "matches":
        return <TelaMatches vaiParaInicial={vaiParaInicial} />
      default:
        return <>Erro! Página não encontrada!⚠️</>


    }
  }

  const vaiParaInicial = () => {
    setTela("inicial")
  }

  const vaiParaMatches = () => {
    setTela("matches") 
  }

 
  
   
  return (
    <div>
      <Header>
     <Logo src= {astro} alt="Logo" /> 
     <Botao onClick={vaiParaMatches}>Matches</Botao>
     </Header>
     {mudarTela()}
    
       </div>
  )
}
