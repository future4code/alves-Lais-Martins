import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login () {
    const navigate = useNavigate()

   const voltar = () => {
    navigate (-1)
   } 

   const enviar = () => {
    navigate("/adm")
   }

   return (
    <>
    <p>Página de Login</p>
    <button onClick = {voltar}> Voltar </button>
    <button onClick = {enviar}> Enviar </button>
    </>
   )
}