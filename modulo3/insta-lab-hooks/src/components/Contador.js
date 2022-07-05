import React from 'react'
import like from './imagens/gostar.png'
import dislike from './imagens/dislike.png'
import styled from 'styled-components'

const Like = styled.img`
width: 20px;
`
const Dislike = styled.img`
width: 20px;
`
const ContainerLike = styled.div`
display: flex;
`
const Butao = styled.button`
background-color: white;
border: none
`
const Valor = styled.p`
text-align: center;

`

export default function Contador({ subtrai, valorContador, soma }) {
  return (
    <ContainerLike>
      <br/>     
            <Butao onClick={soma}> <Like src = {like}/> </Butao>
      <br/>
      <Valor>
      {valorContador}
      </Valor>
      <br/>
      <Butao onClick={subtrai}> <Dislike src = {dislike}/> </Butao>
    </ContainerLike>
  );
}


//Marcelo, eu tentei fazer igual o de vcs, mas não sei usar a condicional, olha:

// export default function Curtidas() {
//   const [curtido, setCurtido] = useState("false");
//   const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  
 
// const onClickCurtida = () => {
 
//   if (curtido) {
   
//     ({ curtido: !curtido, setNumeroCurtidas: numeroCurtidas - 1 });
//   } else {
//     ({ curtido: !curtido, setNumeroCurtidas: numeroCurtidas + 1 });
//   };
// };
  
// return (
//   <div>
//        <section>
//           <span>Número de curtidas: {numeroCurtidas}</span>
          
//           <button onClick={onClickCurtida}>
//             {numeroCurtidas === 0 ? "Like" : "Dislike"}
//           </button>
//         </section>
        
         

//   </div>
// )
// }
