import React from 'react';
import axios from "axios";
import styled from "styled-components";

const CardLista = styled.div `
background-color: beige;
`


export default class ListaUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegandoUsuarios()
  }

  pegandoUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
      headers: {
        Authorization: "lais-martins-alves"
      }
    })
    .then((res) => {
      this.setState({usuarios: res.data})
    })
      .catch((err) => {
        alert("Ocorreu um erro! Tente novamente.")
      })
  }

  deletarUsuarios = (id) => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}'
    axios.delete(url, {
      headers: {
        Authorization: "lais-martins-alves"
      }
    })
    .then((res) => {
      alert ("Usuario(a) deletado(a)")
      this.pegandoUsuarios
    })
      .catch((err) => {
        alert("Ocorreu um erro! Tente novamente.")
      })
  }

  render() {
    const listaDeUsuarios = this.state.usuarios.map((pessoa) => {
      return <CardLista key={pessoa.id}>{pessoa.name}<button>X</button></CardLista>;
    }) 

    return (
      <div>ListaUsuarios
        <br />
        <hr />
        <button onClick={this.props.vaiParaCadastro}>Ir Para Cadastro de Usuários</button>
        <hr/>
        <br/>
        <h2>Lista de Usuários</h2>
        {listaDeUsuarios}
      </div>

    )
  }
}
