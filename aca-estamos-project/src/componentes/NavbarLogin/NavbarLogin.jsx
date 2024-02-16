import React from 'react';
import './NavbarLogin.css'

const NavbarLogin = () => {
   
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="container-fluid text-light p-3" style={{ backgroundColor: '#83A637' }}>
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid" style={{ backgroundColor: '#83A637' }} id="greenContainer">

                                    <div>
                                        <a className="navbar-brand " href="/"><img src="/Logos/logo2.0.png" alt="Bootstrap" width="100" height="100" id="hire" /></a>
                                    </div>
                                    <div className="ml-4" id="hashtagDelInicio">
                                        <p className="mb-0">#RencaOrgullosa</p>
                                        <p className="mb-0">#RencaCrece</p>
                                        <p className="mb-0">#RencaParticipa</p>
                                    </div>
                                    <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4 secondNav" style={{ justifyContent: 'flex-end' }} id="botonesnav">
                                        <div className="position-relative">
                                            <button className="btn btn-m me-2 userButton" type="button" style={{ backgroundColor: '#D97D0D'}}>
                                                <a href="#"><i className="fa-solid fa-bell"></i></a>
                                            </button>
                                            <button className="btn nav-item dropdown btn-m userButton userN" style={{ backgroundColor: '#049DD9' }}>
                                                <a className="nav-link dropdown-toggle userName" href="#" id="navbarDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Nombre de usuario
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right position-absolute top-100 start-0" aria-labelledby="navbarDropdown">
                                                    {/* Agrega cualquier elemento adicional del menú desplegable según sea necesario */}
                                                    <a className="dropdown-item" href="#">Mi perfil</a>
                                                    <a className="dropdown-item" href="#">Actualizar mi CV</a>
                                                    <a className="dropdown-item" href="#">Cerrar sesión</a>
                                                    {/* <a className="dropdown-item" href="#">Item 4</a> */}
                                                    {/* ... */}
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </nav>
                        </div>

                        <div className="container-fluid" style={{ backgroundColor: '#f2f7ea' }}>
                            <nav className="navbar navbar-expand-lg  ">
                                <div className="container-fluid " style={{ backgroundColor: '#f2f7ea' }}>
                                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                                        data-target="#Nav2" aria-controls="Nav2" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-center" id="Nav2">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">Inicio</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/Cursos">Cursos</a>
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
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavbarLogin