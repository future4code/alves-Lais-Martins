import React from 'react';
import axios from "axios";
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';



// Marcelo, me ajuda!

// A minha lógica foi que eu peguei a função cadastrandoUsuario do Post e passei ela pro CadastroUsuario ao lado como props
// essa retornou no return do App js e pra poder retornar eu criei o novoNomeCadastro. Faz sentido?
// Não sei mais como entender isso, ja zerei o youtube e ainda nao foi



export default class App extends React.Component {
  state = {
    listaCadastrados: [],
    erro: "",
    nomeCadastro: "",
    emailCadastro: "",
  };

 cadastrandoUsuario = () => {
  const novoCadastro = {
    name: this.state.nomeCadastro,
    email:this.state.emailCadastro
  };
  axios
  .post ("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", novoCadastro,
  {
    headers: {
      Authorization: "lais-martins-alves"
    }

  }).then((cadastrado) => {
  console.log(cadastrado);
  cadastrado.status === 200 && alert("seu cadastro foi enviada"); 
}).catch((erro) => {
  alert(erro.response.data.message);
})
}

novoNomeCadastro = (event) => {
  this.setState({ nomeCadastro: event.target.value });
};

novoEmailCadastro = (event) => {
  this.setState({ emailCadastro: event.target.value });
};

listandoUsuario = () => {

  axios
  .get ( "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
  {
    headers: {
      Authorization: "lais-martins-alves"
    }

}).then((resposta) => {
  this.setState({ listaCadastrados: resposta.data.result.list });
});}
// }).catch((erro) => {
//   this.setState({ erro: erro.response.data }); 
// }});

  render() 
{
    return (
      <>
        <CadastroUsuario 
        nomeCadastro={this.state.nomeCadastro} 
        listaCadastrados={this.state.listaCadastrados}
        cadastrandoUsuario={this.cadastrandoUsuario}
        novoNomeCadastro={this.novoNomeCadastro}
        />
        <br/>
        <hr/>
      
        <ListaUsuarios nomeCadastro={this.state.nomeCadastro} 
        listaCadastrados={this.state.listaCadastrados}
        listandoUsuario={this.listandoUsuario}/>
      </>
    )}

  }



