import React from 'react';
import  './Navbar.css'
const Navbar = () => {
  return (
    <>
      
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
                  <a className="nav-link" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cursos">Cursos</a>
                </li>
                <li>
                  <a className="nav-link" href="/Nosotros">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contacto">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    
    </>
  );
};

export default Navbar;
