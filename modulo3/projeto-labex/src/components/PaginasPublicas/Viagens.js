import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const ContainerCard = styled.div`
border: 1px solid black;
`

export default function Viagens() {
  const navigate = useNavigate ()
  const [viagem, setViagem] = useState([])

  const voltar = () => {
    navigate(-1)
  }

  const vaiParaInscreverSe = () => {
    navigate("/cadastro")
  }

  const verViagem = () => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:lais/trips`)
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
  
   return <div key ={index}>
       <p>{viagem.name}</p>
       <p>{viagem.description}</p>
       <p>{viagem.planet}</p>
       <p>{viagem.duration}</p>
       <p>{viagem.date}</p>
       </div>
  })

 
             
  return (
    <div>
      <p>Viagens</p>
      <ContainerCard>
      {cardViagem}
      </ContainerCard>
        <button onClick={voltar}>Voltar</button>
        <button onClick={vaiParaInscreverSe}>Inscreva-se</button>
    </div>
  )
}
