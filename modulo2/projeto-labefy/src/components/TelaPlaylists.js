import React from "react";
import axios from "axios";
import styled from "styled-components"

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

    pegaListas = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "lais-martins-alves"
                }
            })

            this.setState({ listas: res.data })
        } catch (err) {
            alert("Ocorreu um erro!")
        }
    }

    deletarLista = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "lais-martins-alves"
            }
        })
            .then((res) => {
                alert("Playlist deletada")
                this.pegaListas()
            })
            .catch((err) => {
                alert("Ocorreu um erro!")
            })
    }


    render() {
        const imprimeLista = this.state.listas.map((list) => {
            return (
                <CardPlayList key={list.id}>
                    {list.name}
                    <button onClick={() => this.deletarLista(list.id)}>Deletar Playlist</button>
                </CardPlayList>
            )
        })


        return (
            <div>
                <button onClick={this.props.irCriar}>Criar Nova Playlist</button>
                {imprimeLista} 
            </div>
        )
    }
}
