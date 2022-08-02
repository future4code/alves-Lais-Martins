import {useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function Etapa1() {
    const navigate = useNavigate()
    const [select, setSelect] = useState("")
      

      const mudaTela = () => {
        {onChange === "Ensino médio incompleto"||"Ensino médio completo"? navigate("/tres"):navigate("/dois")}   
    }
    
        const onChange = (e) => {
            setSelect(e.target.value)
        }
  const medio = "Ensino médio incompleto"

  return (
    <div>
        <h2>Etapa1 - Dados Gerais</h2>

        <p>1- Qual o seu nome?</p>
        <input/>
                
        <p>2- Qual a sua idade?</p>
        <input/>

        <p>3- Qual o seu -email?</p>
        <input/>

        <p>4- Qual a sua escolaridade?</p>
        <select value={select} onChange={onChange}>
                       
            <option >{medio}</option>
            <option >Ensino médio completo</option>
            <option >Ensino superior incompleto</option>
            <option >Ensino superior completo</option>
        </select>
            <br/>
            <br/>
        <button onClick={mudaTela}>Próxima Etapa</button> 
    </div>
  )
  }