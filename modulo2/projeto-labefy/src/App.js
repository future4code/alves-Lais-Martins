import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import TelaPlaylists from "./components/TelaPlaylists";


export default class App extends React.Component {
 
  state= {
    telaAtual: "criar"
  }

  mudarTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
      return <CriarPlaylist irLista={this.irLista}/>
      case "listas":
      return <TelaPlaylists irCriar={this.irCriar}/>
      default:
        return <>Erro! Página não encontrada 😥</>
    }
  }

  irCriar = () => {
    this.setState({telaAtual: "criar"})
  }  

  irLista = () => {
    this.setState({telaAtual: "listas"})
  } 
  render() {
    return (
      <div>
        {this.mudarTela()}
        </div>
    )
  }
}

