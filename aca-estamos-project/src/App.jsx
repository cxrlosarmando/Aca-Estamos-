import { useState } from 'react';
import './App.css';
import Loading from './Efectos/Loading';
import Alert from './Efectos/Alert.';
import React from 'react';
import './Efectos/Alert.css'
import EnvioFormulario from './Efectos/EnvioFormulario'
import './Efectos/EnvioFormulario.css'
function App() {

  return (
    <>
      <div>
        <h1>Alertas con useAlert:aviso de mal envio de datos</h1>
        <EnvioFormulario />
        {/* <Alert /> Renderiza el componente de alerta */}
      </div>
    </>
  );
}

export default App;
