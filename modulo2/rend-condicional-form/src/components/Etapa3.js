import React from "react";

function Etapa3 ( ) {
    function etapaTres (event) {
        event.preventDefaulf()
        console.log('Foi pro Banco de dados!')
    }
    return (
        <div>
            <h1> <strong> Etapa 3 - Informações Gerais de Ensino </strong> </h1>
            <form onSubmit={etapaTres}>
                <div>
                    <p>5- Por que voê não terminou um curso de graduação?</p>
                    <input type= "text" placeholder= "Digite aqui"/>
                </div>
                <br/>
                <div>
                <p>6- Você fez algum curso complementar?</p>
                    <input type= "text" placeholder="Digite aqui"/>
                </div>
                <br/>
            </form>
        </div>
    )
}

export default Etapa3


// export default class Login extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1> <strong> Etapa 3 - Informações Gerais de Ensino </strong> </h1>
          
//           <p>5- Por que voê não terminou um curso de graduação?</p><input />
//           <button onClick={this.props.enviar}>Enviar </button> <br/>
//           <p>6- Você fez algum curso complementar?</p><input />
//           <button onClick={this.props.enviar}>Enviar </button> <br/>
          
//           <br/><br/>
//           <button onClick={this.props.proximo}>Próxima Etapa </button> <br/>
//         </div>
  
        
//       );
//     }
//   }