import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import logo from './imagens/insta.png'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
    
`;

const Img =styled.img`
width: 100px;
`;

const ContPai = styled.div`
width: 300px;
height: 100%;
margin-left: 35%;

`

function Principal() {
  return (
    <ContPai>
    <Img src={logo}/>
    <MainContainer>
      <Post
        nomeUsuario=<strong>{'Huguinho'}</strong>
        fotoUsuario={"https://i.pinimg.com/originals/43/b7/6a/43b76ada31b66e32564951474c7dd69d.png"}
        fotoPost={"https://th.bing.com/th/id/OIP.Yt29ncIKXbwy0p6H1ahWQQAAAA?pid=ImgDet&rs=1"}
      />
    </MainContainer>

<MainContainer>
<Post
  nomeUsuario=<strong>{'Zezinho'}</strong>
  fotoUsuario={"https://i.pinimg.com/736x/4d/f1/c5/4df1c510748ff4fd958b72749d12fa84--disney-quiz-nursery-room.jpg"}
  fotoPost={"https://th.bing.com/th/id/OIP.3x2c6liChM6MZd9zozRHzgHaFj?w=273&h=205&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
/>
</MainContainer>

<MainContainer>
<Post
  nomeUsuario=<strong>{'Luisinho'}</strong>
  fotoUsuario={"https://i.pinimg.com/474x/b0/db/6f/b0db6fa7b1d63121f7dc4e8d53cd6d62.jpg"}
  fotoPost={"https://gifimage.net/wp-content/uploads/2017/10/carregando-gif-animado-9.gif"}
/>
</MainContainer>
</ContPai>


  );
}

export default Principal;
