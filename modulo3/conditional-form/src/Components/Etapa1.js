import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import * as A from './styled'



export default function Etapa1() {
    const navigate = useNavigate()
    const [select, setSelect] = useState(1)
    
        const onChange = (e) => {
            setSelect(e.target.value)
        }
  
  const mudaTela = () => {
    (select === 1 || select === 2)? navigate("tres") : navigate("dois")
    console.log(select)
}

  return (
    <A.ContainerForm>
        <div>
        <A.H2>Etapa1 - Dados Gerais</A.H2>

        <p>1- Qual o seu nome?</p>
        <input/>
                
        <p>2- Qual a sua idade?</p>
        <input/>

        <p>3- Qual o seu -email?</p>
        <input/>

        <p>4- Qual a sua escolaridade?</p>
        <select value={select} onChange={onChange}>
                       
            <option value= {1}>Ensino médio incompleto</option>
            <option value= {2} >Ensino médio completo</option>
            <option value= {3}>Ensino superior incompleto</option>
            <option value= {4}>Ensino superior completo</option>
        </select>
            <br/>
            <br/>
        <button onClick={mudaTela}>Próxima Etapa</button> 
        </div>
    </A.ContainerForm>
  )
  }