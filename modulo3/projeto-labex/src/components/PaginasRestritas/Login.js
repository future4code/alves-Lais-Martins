import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import useForm from '../../Hooks/Hooks'

export default function Login () {
    const navigate = useNavigate ()
    const {form, onChange} = useForm({email:"", password:""})

   const voltar = () => {
    navigate (-1)
   } 

     const logando = (e) => {
    e.preventDefault()
        
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais/login', form)
    .then((res) => {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        navigate('/adm')
    })
    .catch((error) => {
        console.log(error.response)
        alert('E-mail ou Senha incorreto', error.response)
        navigate('/login')
    })
   }

   return (
    <>
    <button onClick = {voltar}> Voltar </button>
    <br/>
    <p>Página de Login</p>
    <br/>

    <form onSubmit={logando}>

    <input
    name = 'email'
    placeholder = {'E-mail'}
    type = 'email'
    value = {form.email}
    onChange = {onChange}
    />

    <input
    name = 'password'
    placeholder = {'Senha'}
    type = 'password'
    value = {form.password}
    onChange = {onChange}
    />
    

    <button > Enviar </button>
    </form>
    </>
   )
}