import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function ViagemEscolhida () {
    const navigate = useNavigate()

    const voltar = () => {
        navigate(-1)
    }

    return (
        <>
        <p>Viagem escolhida e Candidatos</p>
            <button onClick = {voltar}> Voltar </button>
        </>
    )
}