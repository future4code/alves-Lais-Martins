import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function TelaMatches(props) {
    const [match, setMatch] = useState([])
    
    const listaMatches = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:lais-martins-alves/matches
        `)
        .then ( res => {
            setMatch(res.data.matches)
        })
        .catch ( error => alert ('Erro'))
    }

    useEffect(() => {
        listaMatches ()
           }, [])

    const cardMatches = match.map((perfil)=> {
        return <div>
            <img src = {perfil.photo}/>
            <p>{perfil.name} </p>
        </div>
    })


  const limpar= () => {
        axios
        .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:lais-martins-alves/clear`)
        .then ( res => {
            listaMatches()
         })
        .catch ( error => alert ('Erro'))
    }

  return (
    <div>
        <button onClick={props.vaiParaInicial}>Ir Para inicio</button>
        {cardMatches}
        <button onClick={limpar}>Limpar</button>
    </div>


  )
}
