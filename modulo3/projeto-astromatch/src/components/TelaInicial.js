import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import x from './imagens/x.png'
import s2 from './imagens/s2.png'

const Foto = styled.img`
width: 200px;
height: 300px;
`
const Butao = styled.img`
width: 50px;
`

const Button = styled.button`
background-color: white;
border: none;
margin: 90px 30px 20px 0;
:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);}
`

const Card = styled.div`
border: 3px white;
border-radius: 4%;
border-style:  dashed;
padding: 20px;
display: flex;
margin: 50px 20px 50px 50px;
width: 600px;
background-color: black;
color: white;
`
const ContainerCard = styled.div`
margin-left: 50px;
`

const Curtir = styled.div`
display: flex;
flex-direction: column;
width: 250px;
`

const Titulo = styled.p`
font-size: xx-large;
`
const Bio = styled.p`
font-size: x-large;
`

const Body = styled.div`
display: flex;
`

const Texto = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin-left: 50px;
`

export default function TelaInicial(props) {
    const [perfil, setPerfil] = useState ({})
  
    const escolherPerfil = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:lais-martins-alves/person`)
        .then ( res => {
            setPerfil(res.data.profile) 
        })
        .catch ( error => alert ('Erro'))
    }
    
    const like = (id) => {
        const body = {
            id: id,
            choice: true
        }
        axios 
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:lais-martins-alves/choose-person`, body )
        .then (res => {
            escolherPerfil()
        })
        .catch ( error => alert ('Erro'))
    } 


    useEffect(() => {
        escolherPerfil ()
           }, [])

    const card = perfil &&
    <Card>
    <Foto src= {perfil.photo} alt="Perfil"/>
    <Texto>
    <Titulo>{perfil.name}, {perfil.age}</Titulo>
    <Bio>{perfil.bio}</Bio>
    </Texto>
    </Card>       

  return (
    <Body>
      <ContainerCard>
      {card}
      </ContainerCard>

      <Curtir>
    <Button onClick={()=>like(perfil.id)}><Butao src={s2}/></Button>
    <br/>
    <Button onClick={escolherPerfil}><Butao src={x}/></Button>
    </Curtir>
    </Body>
  )
}


 