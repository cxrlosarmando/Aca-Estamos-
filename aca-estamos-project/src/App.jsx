import { useState } from 'react';
import Footer from '../src/componentes/Footer/Footer';
import './App.css';
import NavBar from '../src/componentes/Navbar/Navbar';
import Registro from '../src/componentes/Registro/Registro';
import OlvidoContraseña from '../src/componentes/OlvidoContraseña/OlvidoContraseña';
import Header from '../src/componentes/Header/Header';
function App() {

  return (
    <>
    <Header/>
    <NavBar/>
    
    <OlvidoContraseña/>
    <Footer />
    
    </>
  );
}

export default App
