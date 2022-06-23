import React from 'react';
import CadastroUsuarios from './components/CadastroUsuarios';
import ListaUsuarios from './components/ListaUsuarios'





export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  mudarTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CadastroUsuarios vaiParaLista={this.vaiParaLista} />
      case "lista":
        return <ListaUsuarios vaiParaCadastro={this.vaiParaCadastro} />
      default:
        return <>Erro! Página não encontrada!⚠️</>


    }
  }

  vaiParaCadastro = () => {
      this.setState({telaAtual: "cadastro"})
  }

  vaiParaLista = () => {
    this.setState({telaAtual: "lista"}) 
  }

  render() {
    return (
      <div>
        {this.mudarTela()}

      </div>
    )
  }
}



