import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element = {<Etapa1/>}/>
          <Route path = "dois" element = {<Etapa2/>}/>
          <Route path = "tres" element = {<Etapa3/>}/>
          <Route path = "final" element = {<Final/>}/>
          </Routes>
        </BrowserRouter> 
  )
}
