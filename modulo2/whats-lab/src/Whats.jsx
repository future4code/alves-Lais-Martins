import React, { Component } from 'react'

export default class Whats extends Component {
    state = {
        nome: '',
        mensagens:''
    }

    pegaNome = (event) => {
        this.setState({
            nome: event.target.value,
        })
    }

    pegaConversa = (event) => {
        this.setState({
            mensagens: event.target.value,
        })
    }

  render() {
    return (
      <div className='quadradro'>
        <form action='#'>
            <input onChange={this.pegaNome} type="text"placeholder = 'Usuário'/>
            <input onChange={this.pegaConversa} type="text"placeholder = 'Mensagem'/>
            <button onClick={this.event}>Enviar</button>
        </form>
      </div>
    
    )
  }
}


