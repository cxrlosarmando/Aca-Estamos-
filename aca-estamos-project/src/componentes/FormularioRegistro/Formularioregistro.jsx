import React from 'react';
import './Formularioregistro.css'
const FormularioRegistro = () => {
  return (
    <div>
      <main className="d-flex justify-content-center">
        <div style={{ margin: '50px auto', maxWidth: '800px' }}>
          <div
            className="border p-4"
            style={{
              backgroundColor: 'rgba(131, 166, 55, 0.15)',
              borderRadius: '10px',
              borderStyle: 'solid',
              borderColor: 'black',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            <h2 className="text-center">Datos Registro</h2>
            <div className="form-Registro">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre Empresa</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Nombre Empresa" />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Rut Empresa</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="11.111.111-1" />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="validationCustom03" placeholder="+59 999999999" />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">Rubro</label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="Hoteleria, Consultoria, ect..." />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="example@Email.com" />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom06" className="form-label">Repetir Correo</label>
                    <input type="text" className="form-control" id="validationCustom06" placeholder="example@Email.com" />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom07" className="form-label">Url de Página web</label>
                    <input type="text" className="form-control" id="validationCustom07" placeholder="Url" />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom08" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="validationCustom08" placeholder="*********" />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom09" className="form-label">Repetir Contraseña</label>
                    <input type="password" className="form-control" id="validationCustom09" placeholder="*********" />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>
                <div className="row" id="contenedor-registro">
                  <button type="button" className="btn btn-primary btn-lg" id="boton-registro">Registrarse</button>
                </div>
                <div className="col">
                  <div className="google-icon">
                    <a href="#"><img className="img-google" src="/Img/Google.icon.jpg" alt="Google icon" /></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormularioRegistro;