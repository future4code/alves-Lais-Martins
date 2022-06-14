import logo from './logo.svg';
import './App.css';
import Etapa2 from "./components/Etapa2.js";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4.js";
import Form1 from "./components/Form1.js";
import styled from 'styled-components';
import React, { useState, } from 'react';

//em resumo como venho dizendo há dias, não sei usar invocar, seja return, inclick, console. Assisti varias coisas mas ainda não consegui entender

//ta bem poluído pq tentei com class e depois com function fazer dar certo e não apaguei 

function App() {
// state = {
//   escolaridade: 1, 2
// }
//Tô tentando fazer o procedimento que seria feito se tivesse um banco mas empaquei
  const escolaridade = useState();


  // tentantando fazer com que o usuario fosse direcionado de para a proxima etapa de acordo com a sua escolaridade mas nao consegui
 
  function mudaPg() {
  if (this.setState.value === 1) {
    <Etapa3/>
  } else {
    <Etapa2/>
  }
}
 

  return (
    <div >
      <Form1/>

        <br/>

        <label>Escolaridade </label>
        <select name= "mudaPg">
        <option value=""> Selecione </option> 
        <option value="1"> médio incompleto</option>
        <option value="1">médio completo</option>
        <option value="2">superior incompleto</option>
        <option value="2">superior completo</option>
        </select>
        <br/>
        <br/>
        <button onClick={mudaPg}>Próxima etapa</button>
        
       
    </div>
    
  );
  
}



export default App;
