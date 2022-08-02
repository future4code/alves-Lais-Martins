import React from 'react'
import Router from './Router'
// import Etapa1 from "./Components/Etapa1";
// import Etapa2 from "./Components/Etapa2";
// import Etapa3 from "./Components/Etapa3";
// import Final from "./Components/Final";


function App() {
  // const [telaAtual, setTelaAtual] = useState(1)
  // const [select, setSelect] = useState("")
  
  // const onChangeSelect = (e) => {
  //   setSelect(e.target.value)
  //   console.log("select"+e.target.value)
  // }

  // const mudaTela = () => {
  //   setTelaAtual(telaAtual +1)
  // }

  //  const renderizaTelaAtual = () => {
	// 	if (telaAtual === 1){
	// 		return <Etapa1 mudaTela={mudaTela}/>
	// 	} else if (telaAtual === 2 ){
	// 		return <Etapa2 mudaTela={mudaTela}/>
	// 	} else if (telaAtual === 3){
	// 		return <Etapa3 mudaTela={mudaTela}/>
	// 	} else if (telaAtual === 4){
	// 		return <Final/>
	// 	}
	// }

 
  

  return (
    <div>
      <Router/>
   </div>
  );
}

export default App;






