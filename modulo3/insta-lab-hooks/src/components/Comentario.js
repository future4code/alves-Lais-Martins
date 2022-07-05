import React from 'react'
import { useState } from "react"
import styled from 'styled-components'

const Fonte = styled.p`
font-family: cursive;
font-size: small;
`
const Comentar = styled.button`
background: #006EFF;
color: white
`

export default function Comentario() {
    const [neoComents, setNeoComents] = useState("");
    const [arrayComents, setArrayComents] = useState(["Linda 🔥", "😻😻😻", "Oi, sumida rs", "Ly, a polícia tá atrás de você, amiga"]);
  
    const handleInput = (e) => {
      setNeoComents(e.target.value);
    };
  
    const addComents = () => {
      setArrayComents([...arrayComents, neoComents]);
      setNeoComents("");
    };
    console.log(arrayComents);
    return (
      <div>
        <h3>Comentários</h3>
        <input value={neoComents} onChange={handleInput} />
        <Comentar onClick={addComents}>Comentar</Comentar>
        {arrayComents.map((item, index) => {
          return <Fonte key={index}>{item}</Fonte>;
        })}
      </div>
    );
  }
  