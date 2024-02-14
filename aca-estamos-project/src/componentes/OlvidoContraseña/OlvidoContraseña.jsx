import React from 'react';
import './OlvidoContraseña.css';

const OlvidoContraseña = () => {
  return (
    <main className="d-flex justify-content-center vh-100 w-100">
      <div className="row">
        <div id="ContenedorOlvCont" className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 align-self-center">
          <div className="border p-4 mb-4 mb-lg-5 mx-lg-1">
            <h2 className="text-center">Recuperación de contraseña</h2>
            <div className="from-ingreso">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su correo electrónico</label>
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">Ingrese un correo electrónico registrado</div>
                </div>
                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary btn-lg" id="btn-back">Volver</button>
                  <button type="submit" className="btn btn-primary btn-lg" id="bt-login">Recuperar Contraseña</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OlvidoContraseña;
