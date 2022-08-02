import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Etapa2(props) {
    const navigate = useNavigate()

    const onClick = () => {
        navigate("/final")
    }

    return (
        <div>
            <h2>Etapa2 - Informações do Ensino Superior</h2>

            <p>5- Qual o curso?</p>
            <input />

            <p>6- Qual a unidade de ensino?</p>
            <input />
            <br />
            <br />
            <button onClick={onClick}>Finalizar</button>
        </div>
    )
}
