import { useState } from 'react';
import './App.css';
import Loading from './Efectos/Loading';
import Alert from './Efectos/Alert.';
import React from 'react';
import './Efectos/Alert.css'

function App() {

  return (
    <>
      <div>
        <h1>Alertas con useAlert</h1>
        <Alert /> {/* Renderiza el componente de alerta */}
      </div>
    </>
  );
}

export default App;
