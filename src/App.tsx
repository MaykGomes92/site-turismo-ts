import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/HomePrincipal/index'
import ListaViagens from './components/ListaViagens/index'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home />}/>
      <Route path='/viagens' element={<ListaViagens />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
