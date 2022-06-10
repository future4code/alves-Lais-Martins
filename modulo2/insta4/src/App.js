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
    return (<div>
      <MainContainer>
        <Post
          nomeUsuario={'Bimo'}
          fotoUsuario={'https://tinyurl.com/bimoperfil'}
          fotoPost={'https://tinyurl.com/bimozinho'}
        />
<br/>
<Post
          nomeUsuario={'Marceline'}
          fotoUsuario={'https://tinyurl.com/marceperfil'}
          fotoPost={'https://tinyurl.com/marcejuba'}
        />
<br/>
<Post
          nomeUsuario={'Princess Caroço'}
          fotoUsuario={'https://tinyurl.com/cacarorococo'}
          fotoPost={'https://tinyurl.com/princesacar'}
        />
      </MainContainer>
      </div> );
  }
}

export default App;
