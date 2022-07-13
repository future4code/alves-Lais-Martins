import Reat from 'react'
import {useNavigate} from 'react-router-dom'

export default function AreaAdm () {
    const navigate = useNavigate()

    const home = () => {
        navigate("/")
    }

    const addViagem = () => {
        navigate("/criar")
    }

    const viagemEscolhida = () => {
        navigate("/cadastrados")
    }

    return (
        <>
        <p>Área de Funcionários</p>
            <button onClick= {home}> Início </button>
            <button onClick = {addViagem}> Adicionar Viagem </button>
            <button onClick = {viagemEscolhida}> Viagem Escolhida </button>
        </>
    )
}