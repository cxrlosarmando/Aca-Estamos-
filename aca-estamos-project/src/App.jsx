import { useState } from 'react';
import './App.css';
import Loading from './Efectos/Loading';
import Alert from './Efectos/Alert';
import React from 'react';

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
