import React from 'react';
import axios from "axios";


export default class CriarPlaylist extends React.Component {
  state = {
    nome:""
  }

  handleNome = (e) => {
    this.setState({nome: e.target.value})
  }

  criarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.nome,
    }

    axios.post(url, body, {
      headers: {
        Authorization: "lais-martins-alves"
      }
    })
    .then((res) => {
      alert("Playlist cadastrada 🎵")
      this.setState({nome:""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.irLista} >Ir para Playlists</button>
        <hr/>
        
        <input 
        placeholder={"Nova Playlist"}
        value={this.state.nome}
        onChange={this.handleNome}
        />
        <button onClick={this.criarPlaylist}>Criar</button>

      </div>
    )
  }
}

