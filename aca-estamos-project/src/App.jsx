import { useState } from 'react';
import Footer from '../src/componentes/Footer/Footer';
import './App.css';
import NavBar from '../src/componentes/Navbar/Navbar';
import Registro from '../src/componentes/Registro/Registro';
import OlvidoContraseña from '../src/componentes/OlvidoContraseña/OlvidoContraseña';
function App() {

  return (
    <>
    <NavBar/>
    <Registro />
    <OlvidoContraseña/>
    <Footer />
    
    </>
  );
}

export default App
