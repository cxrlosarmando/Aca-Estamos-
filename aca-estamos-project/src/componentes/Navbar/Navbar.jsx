import React from 'react';
import  './Navbar.css'
const Navbar = () => {
  return (
    <header>
      {/* Navbar */}
      <div className="container-fluid text-light p-3" style={{ backgroundColor: '#83A637' }}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid" style={{ backgroundColor: '#83A637' }} id="greenContainer">
            <div>
              <a className="navbar-brand" href="/index.html">
                
              </a>
            </div>
            <div className="ml-4" id="hashtagDelInicio">
              <p className="mb-0">#RencaOrgullosa</p>
              <p className="mb-0">#RencaCrece</p>
              <p className="mb-0">#RencaParticipa</p>
            </div>
            <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4" id="botonesnav">
              <button className="btn btn-custom btn-lg me-2" id="botonInicio" type="button" style={{ backgroundColor: '#049DD9' }}>
                <a href="./pages/IniciarSes.html">Iniciar Sesión</a>
              </button>
              <button className="btn btn-custom btn-lg me-2" type="button" id="botonInicio" style={{ backgroundColor: '#D97D0D' }}>
                <a href="/pages/registro.html">Regístrate</a>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar 2 */}
      <div className="container-fluid" style={{ backgroundColor: '#f2f7ea' }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid" style={{ backgroundColor: '#f2f7ea' }}>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#Nav2"
              aria-controls="Nav2" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="Nav2">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/index.html">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cursos</a>
                </li>
                <li>
                  <a className="nav-link" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
