import React from "react";

function Etapa2 ( ) {
    function etapaDois (event) {
        event.preventDefaulf()
        console.log('Foi pro Banco de dados!')
    }
    return (
        <div>
            <h1> <strong> Etapa 2 - Informações Do Ensino Superior </strong> </h1>
            <form onSubmit={etapaDois}>
                <div>
                    <p>5- Qual curso?</p>
                    <input type= "text" placeholder= "Digite aqui"/>
                </div>
                <br/>
                <div>
                <p>6- Qual a unidade de ensino?</p>
                    <input type= "text" placeholder="Digite aqui"/>
                </div>
                <br/>
            </form>
        </div>
    )
}

export default Etapa2




// export default class Login extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1> <strong> Etapa 2 - Informações Do Ensino Superior </strong> </h1>
          
//           <p>5- Qual curso?</p><input />
//           <button onClick={this.props.enviar}>Enviar </button> <br/>
//           <p>6- Qual a unidade de ensino?</p><input />
//           <button onClick={this.props.enviar}>Enviar </button> <br/>
          
//           <br/><br/>
//           <button onClick={this.props.proximo}>Próxima Etapa </button> <br/>
//         </div>
  
        
//       );
//     }
//   }