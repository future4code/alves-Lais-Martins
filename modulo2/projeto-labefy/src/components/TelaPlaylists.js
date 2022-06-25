import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const CardPlayList = styled.div`
border: 1px solid black;
width: 500px;
padding: 5px;
margin: 10px;
`
export default class TelaPlaylists extends React.Component {

    state = {
        listas: []
    }

    componentDidMount() {
        this.pegaListas()
    }

    pegaListas = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "lais-martins-alves"
            }
        }) .then((res) => {
                this.setState({ listas: res.data })
            })
            .catch((err) => {
                alert("Erro! Tente novamente.")
            })
    }

    deletarLista = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "lais-martins-alves"
            }
        })
            .then((res) => {
                alert("Lista deletada")
                this.pegaListas()
            })
            .catch((err) => {
                alert("Erro ao deletar lista")
            })
    }


    render() {
        const playList = this.state.listas.map((user) => {
            return (
            <CardPlayList key={user.id}> 
            {user.name} 
            <button onClick={() => this.deletarLista(user.id)}>Deletar Playlist</button>
            </CardPlayList>
            )
        })
       

        return (
            <>
                <button onClick={this.props.irCriar}>Criar Nova Playlist</button>
                <p> {playList} </p>
            </>
        )
    }
}
