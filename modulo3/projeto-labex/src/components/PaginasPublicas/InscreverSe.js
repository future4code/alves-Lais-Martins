import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function InscreverSe () {
    const navigate = useNavigate()

    const vaiParaHome = () => {
        navigate("/")
    }

  return (
    <>
    <p>Inscreva-se</p>
    <button onClick = {vaiParaHome}> Início </button> 
    </>
  )

    
} 