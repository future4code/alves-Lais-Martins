import React from 'react'
import {useNavigate} from 'react-router-dom'


export default function AreaAdm () {
    const navigate = useNavigate()

    const voltar = () => {
        navigate(-1)
    }

    const addViagem = () => {
        navigate("/criar")
    }

    const viagemEscolhida = () => {
        navigate("/cadastrados")
    }

    return (
        <>
            <button onClick= {voltar}> Voltar</button>
            <br/>
        <p>Área de Funcionários</p>
            <button onClick = {addViagem}> Adicionar Viagem </button>
            <button onClick = {viagemEscolhida}> Candidatos à viagens </button>
        </>
    )
}