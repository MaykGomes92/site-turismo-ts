import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePrincipal/index";
import ListaViagens from "./components/ListaViagens/index";
import HotelEscolhido from "./components/HotelEscolhido";
function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="" element={<Home />} />
    <Route path="/viagens" element={<ListaViagens />} />
    <Route path="/viagens/:id" element={<HotelEscolhido />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
