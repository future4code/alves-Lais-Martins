import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function CriarViagem () {
const navigate = useNavigate()

const home = () => {
    navigate("/")
}

const enviar = () => {
    navigate(-1)
}

return (
    <>
    <p>Criar Viagens</p>
    <button onClick = {home}> Início </button>
    <button onClick = {enviar}> Enviar </button>
    </>
)

}