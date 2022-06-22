import React, { Component } from 'react';
import OIP from './OIP.jpg';



export default class ListaUsuarios extends Component {
  render() {
    const listaCadastrados = this.props.listaCadastrados.map((individuo)=> {
        return <li key = {individuo.name}>{individuo.email}</li>
    })
    return (
        <>
         <button onClick={()=>this.props.listandoUsuario()}>Ver lista de Usuários Cadastrados</button>
            <br/>
            <br/>
         <img src={OIP}/>
        </>
    )
  }
}
