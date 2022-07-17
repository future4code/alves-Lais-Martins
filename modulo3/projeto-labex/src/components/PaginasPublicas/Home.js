import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'



export default function Home() {
  const navigate = useNavigate ()

  const vaiParaViagens = () => {
    navigate("/viagens")
  }

  const vaiParaLogin = () => {
    navigate("/login")
  }
       
  return (
    <>
          
      <button onClick={vaiParaViagens}> Viagens </button>
      <button onClick={vaiParaLogin}> Login </button>
    
    </>
  )
}
