import React from 'react'
import menu from './imagens/menu.JPG'
import logo from './imagens/logo.JPG'
import busca from './imagens/busca.png'
import perfil from './imagens/perfil.JPG'
import sino from    './imagens/notifica.png'
import * as C from './styled'


export default function Header() {
  return (
    <div>
        <C.ContainerHeader>
        <C.Parte1>
        <C.Menu><C.ImgMenu src={menu}/></C.Menu>
        <C.Menu><C.ImgLogo src={logo}/></C.Menu>
        </C.Parte1>
        <C.Parte2>
        <C.Input placeholder= 'Pesquisar'/>
        <C.BotaoBusca><C.ImgBusca src={busca}/></C.BotaoBusca>
        </C.Parte2>
        <C.Parte3>
        <C.Menu><C.ImgSino src={sino}/></C.Menu>
        <C.Menu><C.ImgLogo src={perfil}/></C.Menu>
        </C.Parte3>
        </C.ContainerHeader>
        <C.Hr/>
    </div>
  )
}
