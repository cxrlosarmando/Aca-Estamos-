import React from 'react';
import './SolicitudesUsuarios.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FiltroAdmin = ({ searchTerm, setSearchTerm, onApplyFilter }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [filters, setFilters] = useState({
        perfil: "",
        actividad: "",
        rubro: "",
        experiencia: 0,
    });

    const toggleVisibility = (event) => {
        setIsVisible(!isVisible);
        event.preventDefault();
    };

    const handleChange = (event, field) => {
        const value = event.target.value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
        
    };

    // contador de los años de experiencia
    const [valorRango, setValorRango] = useState(0);
    // contador de los años de experiencia
    const handleInput = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            // Si el valor es un número (años de experiencia), actualiza el estado correspondiente
            setValorRango(value);
        } else {
            // Si el valor no es un número, actualiza el término de búsqueda
            setSearchTerm(value);
        }

  


const SolicitudesUsuarios = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSolicitudes, setSelectedSolicitudes] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/Usuario')
            .then(res => {
                const solicitudesNoAceptadas = res.data.data.filter(solicitud => !solicitud.aceptado);
                setSolicitudes(solicitudesNoAceptadas);
            })
            .catch(err => {
                console.error('Error en obtener la información', err);
            });
    }, [searchTerm]);

    const filteredSolicitudes = solicitudes.filter(solicitud => {
        return (
            solicitud.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.Apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.Rut.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.EstadoCivil?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.Telefono?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.Rubro?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.Disponibilidad?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.FechaNacimiento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.NivelEducacional?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.InstitucionEducativa?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            solicitud.Titulo?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    function handleSubmit(_id,email) {
        const conf = window.confirm('Seguro que quieres Aceptar este usuario?');
        if (conf) {
            axios.put(`http://localhost:3000/Usuarios-Aceptados/${_id}`)
                .then(async res => {
                    alert('Usuario Aceptado');
                    const newSolicitudes = solicitudes.filter(solicitud => solicitud._id !== _id);
                    setSolicitudes(newSolicitudes);
                    await axios.post(`http://localhost:3000/Enviar-Correo/${email}`);

                })
                .catch(err => {
                    console.error('Error al aceptar usuario', err);
                });
        }
       
    };



    return (
        <>
            {/* Filtro */}

            

                <div className=" row buscador" style={{ fontFamily: 'Poppins-Regular' }}>
                    <form className="d-flex container-fluid" role="search" id="buscar-ofertas">
                        {/* <div className='d-flex col-10 align-items-center buscadorLupa' style={{ marginRight: '0px' }}> */}
                        <div className='col-9 me-4 searchButton' >
                            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="form-control " type="search" placeholder="Buscador..." aria-label="Buscador..." style={{ height: '48px' }} />
                        </div>
                        <div className='col-1  divLupa'>
                            <button className="btn btn-outline-success" >
                                <i className="fa-solid fa-magnifying-glass img-fluid lupa" style={{ color: 'black', fontSize: '23px', width: '48px', height: '35px' }}></i>
                            </button>
                        </div>
                        {/* </div> */}
                        <div className='col-2 colina'>
                            <button style={{ backgroundColor: '#049DD9', width: '120px', height: '48px' }} className="btn btn-outline-light moreFiltros" type="submit" onClick={toggleVisibility}>Más filtros</button>
                        </div>
                    </form>
                </div>
                {/* Termina el buscador */}

                {/* Comienzan los filtros */}
                <div style={{ display: isVisible ? 'block' : 'none' }}>
                    <div className=" filtroAdmin row filtros-row" style={{ fontFamily: 'Poppins-Regular' }}>
                        {/* <div className=""> */}
                        <div className="col-md-2 filtros-col">
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e, "perfil")}>
                                <option value="" disabled selected hidden>Perfiles</option>
                                <option value="1">Usuarios</option>
                                <option value="2">Empresas</option>

                            </select>
                        </div>
                        <div className="col-md-2 filtros-col">
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e, "actividad")}>
                                <option value="" disabled selected hidden>Actividad</option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>
                            </select>
                        </div>
                        <div className="col-md-2 filtros-col">
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e)}>
                                <option value="" disabled selected hidden>Rubro</option>
                                <option value="Administración">Administración</option>
                                <option value="Agropecuaria">Agropecuaria</option>
                                <option value="Alimenticia">Alimenticia</option>
                                <option value="Arquitectura">Arquitectura</option>
                                <option value="Artesanal">Artesanal</option>
                                <option value="Automotriz">Automotriz</option>
                                <option value="Banca/Financiera">Banca/Financiera</option>
                                <option value="Bioteconología">Bioteconología</option>
                                <option value="Call-Center">Call-Center</option>
                                <option value="Comercio">Comercio</option>
                                <option value="Comercio exterior">Comercio exterior</option>
                                <option value="Comunicaciones">Comunicaciones</option>
                                <option value="Construcción">Construcción</option>
                                <option value="Consultoría">Consultoría</option>
                                <option value="Correo">Correo</option>
                                <option value="Defensa">Defensa</option>
                                <option value="Diseño">Diseño</option>
                                <option value="Editorial">Editorial</option>
                                <option value="Educación">Educación</option>
                                <option value="Energía">Energía</option>
                                <option value="Entretenimiento">Entretenimiento</option>
                                <option value="Farmacéutica">Farmacéutica</option>
                                <option value="Ferroviaria">Ferroviaria</option>
                                <option value="Financiera">Financiera</option>
                                <option value="Gastronomía">Gastronomía</option>
                                <option value="Hotelería/Turismo">Hotelería/Turismo</option>
                                <option value="Imprenta">Imprenta</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Información e investigación">Información e investigación</option>
                                <option value="Informática">Informática</option>
                                <option value="Ingeniería">Ingeniería</option>
                                <option value="Inmobiliaria">Inmobiliaria</option>
                                <option value="Internet">Internet</option>
                                <option value="Laboratorio">Laboratorio</option>
                                <option value="Legal">Legal</option>
                                <option value="Logística/Transporte">Logística/Transporte</option>
                                <option value="Manufactura">Manufactura</option>
                                <option value="Medios">Medios</option>
                                <option value="Publicidad">Publicidad</option>
                                <option value="Recursos Humanos">Recursos Humanos</option>
                                <option value="Retail">Retail</option>
                                <option value="Salud">Salud</option>
                                <option value="Seguridad">Seguridad</option>
                                <option value="Seguros">Seguros</option>
                                <option value="Servicios">Servicios</option>
                                <option value="Tecnología">Tecnología</option>
                                <option value="Telecomunicaciones">Telecomunicaciones</option>
                                <option value="Textil">Textil</option>
                                <option value="Transporte">Transporte</option>
                                <option value="Turismo">Turismo</option>
                                <option value="Veterinaria">Veterinaria</option>
                                <option value="Otros">Otros</option>
                            </select>
                        </div>

                        <div className="col-md-3 filtros-col">
                            <label htmlFor="customRange2" className="form-label">Años de Experiencia</label>
                            <input type="range" className="form-range" style={{ paddingBottom: '5px' }} min="0" max="40" id="customRange2" value={valorRango} onChange={handleInput} />
                            <h6 className="contador">{valorRango}</h6>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className='container-fluid botonfiltro' style={{ alignContent: 'center' }}>
                        <button className='btn btn-lg btn-primary botonFiltro' type='button' onClick={onApplyFilter }>Aplicar filtros</button>
                    </div>

                </div>
           


            {/* Mostrar usuarios */}

            <FiltroAdmin searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="container-fluid">
                <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Solicitudes de nuevos perfiles</h1>
            </div>

            {filteredSolicitudes.map((solicitud) => (
                <main className="solicitudesusuarios" key={solicitud._id}>

                    <div className="container-fluid bigbox" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%', height: '200px' }}>

                        <div className="soliciu-row">
                            <div className="soliciu-col1">
                                <img src={`http://localhost:3000/uploads/${solicitud.ImagenPerfil}`} alt="Imagen perfil" id="user-perfil" /> {/* Reemplaza '/ruta/imagen' con la ruta correcta */}
                            </div>
                            <div className="soliciu-col2">
                                <h3 className="Usuario">{solicitud.Nombre} {solicitud.Apellido}</h3>
                                <p><a href="#">Ver perfil de usuario</a></p>
                            </div>
                            <div className="soliciu-col3">
                                <button onClick={e => handleSubmit (solicitud._id, solicitud.Email)} id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                                <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
                            </div>
                        </div>
                    </div>
                </main>
            ))}

        </>
    );
}
    }}
export default SolicitudesUsuarios;