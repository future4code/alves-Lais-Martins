import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
// eu não faço ideia do que u to fazendo e mesmo assistindo os videos nao to entendendo, que loucura! Vou parar!
class App extends React.Component {
    state = {
      tarefas: [
      { id: Date.now(), 
        texto: 'Tarefa pendente',
        completa: false 
      }, 
      { id: Date.now(), 
        texto: 'Tarefa completa',
        completa: true 
      }, 
      ],
      inputValue:'',
      filtro: ''
    }

  componentDidUpdate() {
      // localStorage.setItem("")
  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })

  }

  criaTarefa = () => {
    console.log(this.state.inputValue)
    const NovaTarefa= { 
      id: Date.now(), 
      texto: this.state.inputValue,
      completa: false 
    }
    const novaListadeTarefas = [NovaTarefa, ...this.state.inputValue ];
    this.setState({tarefas : novaListadeTarefas})
  }

  selectTarefa = (id) => {
    console.log(id)
    const novaListadeTarefas = this.state.tarefas.map((tarefas) => {
      if (tarefas === id.completa) {
        return !id.pendentes
      } else {
        return id.pendentes
      }
    })
  
  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
