import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/Hooks'
import axios from 'axios'
import styled from 'styled-components'

const Form = styled.form`
display:flex;
flex-direction: column;
width: 500px;
`

export default function CriarViagem() {
    const navigate = useNavigate()
    const { form, onChange } = useForm({
        nome: "", planeta: "", data: "", bio: "", duracao: ""
    })

    const voltar = () => {
        navigate(-1)
    }

    const criando = (e) => {
        e.preventDefault()
        const body = {
          name: form.nome,
          planet: form.planeta,
          date: form.data,
          description: form.bio,
          durationInDays: form.duracao
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais/trips', body, { headers: { 
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0' } })
         .then((res) => {
            alert('Viagem Adicionada!')
            console.log(res.data.trip)
            navigate('/viagens')
          })
          .catch((error) => {
            console.log(error.response)
            alert('Dados incorretos. Reveja sua solicitação', error.response)
            navigate('/criar')
          })
      }

    return (
    <>
    <button onClick={voltar}> Voltar </button>
    <br/>
            <p>Criar Viagem</p>
       
     
            <Form onSubmit={ criando }>
                <input
                    name='nome'
                    value={form.nome}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                />
                <input
                    name='planeta'
                    value={form.planeta}
                    onChange={onChange}
                    placeholder="Planeta"
                    required
                />
                <input
                    name='data'
                    value={form.data}
                    onChange={onChange}
                    placeholder="Data da Viagem"
                    required
                />
                <input
                    name='bio'
                    value={form.bio}
                    onChange={onChange}
                    placeholder="Descrição da Viagem"
                    required
                />
                <input
                    name='duracao'
                    value={form.duracao}
                    onChange={onChange}
                    placeholder="Duração em Dias"
                    required
                />
                <button> Enviar Dados </button> 
            </Form> 
               
    </>
            )

}

