import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import useForm from '../../Hooks/Hooks'
import axios from 'axios'


export default function ViagemEscolhida () {
    const navigate = useNavigate()
    const [detalhes, setDetalhes] = useState ({})
    const form = useForm()

    const voltar = () => {
        navigate(-1)
    }

   
    const detalhesViagem = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais/trip/${form.detalhes}
        `, { headers: { 
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0' } })
            .then((res) => {
                setDetalhes(res.data.trip)
            })
            .catch((err) => {
                alert ('Erro')})
    }

    useEffect(() => {
        detalhesViagem()
    }, [])

    const cardDetalhes = detalhes && detalhes.map((detalhes, index) => {
        return <div key ={index}>
       <p>{detalhes.name}</p>
       <hr/>
       <p>{detalhes.description}</p>
       <p>{detalhes.planet}</p>
       <p>{detalhes.durationInDays}</p>
       <p>{detalhes.date}</p>
       </div>
})





    return (
        <div>
        <button onClick = {voltar}> Voltar </button>
        <p>Viagem escolhida e Candidatos</p>

         {cardDetalhes} 
               
                
    </div>
    )
    }

