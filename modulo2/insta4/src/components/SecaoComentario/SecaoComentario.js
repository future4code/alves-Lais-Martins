import React, {Component} from 'react';

import Post from '../Post/Post';
import styled from 'styled-components';

// const CommentContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 5px;
// `

// const InputComentario = styled.input`
//     width: 100%;
//     margin-right: 5px;
// `

// export class SecaoComentario extends Component {
// 	state = {

// 	}

// 	onChangeComentario() {

// 	}

// 	render() {
// 		return <CommentContainer>
// 			<InputComentario
// 				placeholder={'Comentário'}
// 				value={''}
// 				onChange={this.onChangeComentario}
// 			/>
// 			<button onClick={this.props.aoEnviar}>Enviar</button>
// 		</CommentContainer>
// 	}
// }


export class SecaoComentario extends Component {
// 	state = {
// comentario: '',
// 	}

	pegaComents=(event) => {
		this.setState ({
			comentario: event.target.valeu
		} ) }


	render() {
		console.log(this.state.comentario) 
		return (
			<div>
				<form action = "#">
					<input onChange={this.pegaComents} type = "text" placeholder='Comentário'/>
				</form>
			</div>
		) 
	}
} 
