import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/PaginasPublicas/Home'
import Viagens from './components/PaginasPublicas/Viagens'
import InscreverSe from './components/PaginasPublicas/InscreverSe'
import Login from './components/PaginasRestritas/Login'
import AreaAdm from './components/PaginasRestritas/AreaAdm'
import CriarViagem from './components/PaginasRestritas/CriarViagem'
import ViagemEscolhida from './components/PaginasRestritas/ViagemEscolhida'

export default function Router() {
 
    return (
        <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "viagens" element = {<Viagens/>}/>
          <Route path = "cadastro" element = {<InscreverSe/>}/>
          <Route path = "login" element = {<Login/>}/>
          <Route path = "adm" element = {<AreaAdm/>}/>
          <Route path = "criar" element = {<CriarViagem/>}/>
          <Route path = "cadastrados" element = {<ViagemEscolhida/>}/>
        </Routes>
        </BrowserRouter> 
   )
  }
