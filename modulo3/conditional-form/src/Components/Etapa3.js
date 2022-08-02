import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Etapa3(props) {
    const navigate = useNavigate()

    const onClick = () => {
        navigate("/final")
    }
    return (
        <div>
            <h2>Etapa3 - Informações Gerais de Ensino</h2>

            <p>5- Por que você não terminou um curso de graduação?

            </p>
            <input />

            <p>6- Você fez algum curso complementar?</p>
            <select>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
                <option>Não fiz nenhum curso complementar</option>
            </select>
            <br />
            <br />
            <button onClick={onClick}>Finalizar</button>
        </div>
    )
}
