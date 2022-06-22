import React, { Component } from 'react'

export default class CadastroUsuario extends Component {
  render() {
  

    return (
     <>
      <input placeholder="Digite seu nome" value={this.props.nomeCadastro} onChange={this.props.novoNomeCadastro} />
      <input placeholder="Digite seu email" value={this.props.emailCadastro} onChange={this.props.novoEmailCadastro} />
    <button onClick={()=>this.props.cadastrandoUsuario()}>Enviar</button>
    </>
    )
  }
}
