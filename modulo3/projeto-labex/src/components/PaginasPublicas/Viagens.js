import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const ContainerCard = styled.div`
display: flex;
`
const Card = styled.div`
border: 1px solid purple;
border-radius: 5%;
padding: 5px;
margin: 5px;
width: 250px;
background-color: white;
`

const Botoes = styled.div`
display: flex;
justify-content: space-between;
margin: 0 15px 15px 15px;
`

const Principal = styled.div`
color: black;  
`
const Titulo = styled.p`
font-size: small; 
font-family:  sans-serif ; 
text-align: center;
`
const Bio = styled.p`
font-size: small; 
height: 50px;
padding: 5px;
text-align: justify;
`
const Planeta = styled.p`
text-align: center;
font-family:  sans-serif ; 
`
const Data = styled.p`
font-size: small; 
font-family:  sans-serif ; 
text-align: center;
`

export default function Viagens() {
  const navigate = useNavigate ()
  const [viagem, setViagem] = useState("")

  const voltar = () => {
    navigate(-1)
  }

  const vaiParaInscreverSe = () => {
    navigate("/cadastro")
  }

  const verViagem = () => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais/trips`)
    .then (res =>{
       setViagem(res.data.trips)
       console.log(res.data.trips)
    })
    .catch ( error => alert ('Erro'))
    }
  
    useEffect(() => {
    verViagem ()
       }, [])

  const cardViagem = viagem && viagem.map((viagem, index) => {
  
   return <Card key ={index}>
       <Titulo><strong>{viagem.name}</strong></Titulo>
       <hr/>
       <Bio>{viagem.description}</Bio>
       <Planeta><i>{viagem.planet}</i></Planeta>
       <p>{viagem.duration}</p>
       <Data>{viagem.date}</Data>
       </Card>
  })

 
             
  return (
    <Principal>
      <Botoes>
        <button onClick={voltar}>Voltar</button>
        <button onClick={vaiParaInscreverSe}>Inscreva-se</button>
      </Botoes>  
     
      <ContainerCard>
      {cardViagem}
      </ContainerCard>
    
    </Principal>
  )
}
