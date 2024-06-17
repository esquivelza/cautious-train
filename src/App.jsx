import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Componentes/Menu.jsx';
import Home from './paginas/Inicio.jsx';
import Materiales from './paginas/Materiales.jsx';
import Contrucciones from './paginas/Contrucciones.jsx';
import SobreNosotros from './paginas/SobreNosotros.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu 
          nombreMenu="N.E.Z" 
          espacioUno="Inicio" 
          espacioDos="Materiales" 
          espacioTres="Construcciones" 
          espacioCuatro="Sobre Nosotros" 
          textoBuscador="¿Buscas algo?" 
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/materiales" element={<Materiales />} />
          <Route path="/construcciones" element={<Contrucciones />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

