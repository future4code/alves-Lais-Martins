import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Pizza Steve'}
          fotoUsuario={'https://flyclipart.com/thumb2/pizza-steve-39320.png'}
          fotoPost={'https://i.ytimg.com/vi/Yw1eJIHACOY/hqdefault.jpg'}
        />

<Post
          nomeUsuario={'Tigresa Gigante Voadora Surreal'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd40SVGtYtR3eqK-Gt-iFi7rQj2xnNhi22w&usqp=CAU'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxU84gpixT0cooO0Whs-0s0MQ4BW4X_8e8Dg&usqp=CAU'}
        />

<Post
          nomeUsuario={'Titio'}
          fotoUsuario={'https://tinyurl.com/ycyem3ef'}
          fotoPost={'https://tinyurl.com/4cuumvfp'}
        />
      </MainContainer>
    );
  }
}

export default App;
