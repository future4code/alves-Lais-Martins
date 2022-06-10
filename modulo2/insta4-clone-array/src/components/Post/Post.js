import React from 'react'
import styled from 'styled-components'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'



const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`




export class SecaoComentario extends React.Component {
	
	state = {
	  //onde os conmentarios vao aparecer
	  comentarios: ["", ""],
	  
	  valorInputNome: "",
    valorInputFoto: "",
    valorInputPerfil: ""

	};
  
	adicionaComentario = () => {
	  
	  const novoComentario = this.state.valorInputComentario;
  
	  const novoComents = [novoComentario, ...this.state.comentarios];
  
	  this.setState({ quadradinho: novoComents, valorInputNome: "", valorInputFoto:"", valorInputPerfil:"" });
	};
  
	onChangeInputName  = (event) => {
	  
	  this.setState({ valorInputNome: event.target.value });
	};
  onChangeInputFoto  = (event) => {
	  
	  this.setState({ valorInputFoto: event.target.value });
	};
  onChangeInputPerfil  = (event) => {
	  
	  this.setState({ valorInputPerfil: event.target.value });
	};
  
	render() {
	  
	  const listaDeComponentes = this.state.comentarios.map((comentario) => {
    
//NÃO SEI USAR O RETURN JÁ PEDI AJUDA ATÉ AOS CÉUS 
		// return <><this.comentario.nome/> ;<comentario.foto/>; <comentario.perfil/></>;
  
	  });
  
	  return (
		<>
			<input 
		
			  value={this.state.valorInputNome}
			  
			  onChange={this.onChangeInputName}
			  placeholder={"NomeUsuario"}
			/>
			<button onClick={this.adicionaNome}>Adicionar</button>
      <input 
		
			  value={this.state.valorInputFoto}
			  
			  onChange={this.onChangeInputFoto}
			  placeholder={"FotoUsuario"}
			/>
			<button onClick={this.adicionaComentario}>Adicionar</button>

      <input 
		
			  value={this.state.valorInputPerfil}
			  
			  onChange={this.onChangeInputPerfil}
			  placeholder={"FotoPost"}
			/>
			<button onClick={this.adicionaComentario}>Adicionar</button>
  
		  <div>{listaDeComponentes} </div>
      </>
      
	  );
	}
  }



class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  

  onClickComentario = () => {
    this.setState({
      
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: true,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
  }

  render() {
    
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}


const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}



export default Post