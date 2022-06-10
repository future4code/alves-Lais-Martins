import React, { Component } from 'react';



export  class IconeComContador extends Component {

	state= {
		contador:0,
	}


	addSoma = () => {
		this.setState({
			contador: this.state.contador + 1
		})
	}
	render(){
		
	return (<div>
		<p>{this.state.contador}</p>
		<button onClick={this.addSoma}>💛</button>
		</div>)
}
}