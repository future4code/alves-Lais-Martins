import React from 'react';
import axios from "axios";

export default class CadastroUsuarios extends React.Component {
  state = {
    nome: "",
    email: "",
  }

  handleNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  apertandoCadastrar = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = 
      {
        name: this.state.nome,
        email: this.state.email
      }
    axios.post(url,body, {
      headers: {
        Authorization: "lais-martins-alves"
      }
    })
    .then((resposta) => {
      alert("Cadastrado(a) 👍")
      this.setState({nome: "", email: ""})
    })
    .catch((erro) => {
      alert(erro.response.data.message)
    })
  }

  render() {
    return (
      <div>
        CadastroUsuarios
        <br />
        <hr />
        <button onClick={this.props.vaiParaLista}>Ir Para Lista de Usuários</button>
        <br />
        <h2>Cadastro</h2>

        <input
          placeholder={"Nome"}
          value={this.state.nome}
          onChange={this.handleNome}
        />
        <input
          placeholder={"E-mail"}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.apertandoCadastrar}>Cadastrar</button>
      </div>
    )
  }
}
