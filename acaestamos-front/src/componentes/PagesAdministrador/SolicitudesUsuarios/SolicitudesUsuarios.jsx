import React from 'react';
import './SolicitudesUsuarios.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const SolicitudesUsuarios = () => {
    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Usuario')
            .then(res => {
                const solicitudesNoAceptadas = res.data.data.filter(solicitud => !solicitud.aceptado);
                setSolicitudes(solicitudesNoAceptadas);
            })
            .catch(err => {
                console.error('Error en obtener la información', err);
            });
    }, []);

    function handleSubmit(_id) {
        const conf = window.confirm('Seguro que quieres Aceptar este usuario?');
        if (conf) {
            axios.put(`http://localhost:3000/Usuarios-Aceptados/${_id}`)
                .then(res => {
                    alert('Usuario Aceptado');
                    const newSolicitudes = solicitudes.filter(solicitud => solicitud._id !== _id);
                    setSolicitudes(newSolicitudes);
                })
                .catch(err => {
                    console.error('Error al aceptar usuario', err);
                });
        }
    };



    return (
        <>
            <div className="container-fluid">
                <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Solicitudes de nuevos perfiles</h1>
            </div>

            {solicitudes.map((solicitud) => (
                <main className="solicitudesusuarios" key={solicitud._id}>
                    <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
                        <div className="soliciu-row">
                            <div className="soliciu-col1">
                                <img src={`http://localhost:3000/uploads/${solicitud.ImagenPerfil}`} alt="Imagen perfil" id="user-perfil" /> {/* Reemplaza '/ruta/imagen' con la ruta correcta */}
                            </div>
                            <div className="soliciu-col2">
                                <h3 className="Usuario">{solicitud.Nombre} {solicitud.Apellido}</h3>
                                <p><a href="#">Ver perfil de usuario</a></p>
                            </div>
                            <div className="soliciu-col3">
                                <button onClick={e => handleSubmit (solicitud._id)} id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                                <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
                            </div>
                        </div>
                    </div>
                </main>
            ))}

            {/* <main className="solicitudesusuarios">
                <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
                    <div className="soliciu-row">
                        <div className="soliciu-col1">
                            <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="soliciu-col2">
                            <h3 className="Usuario">Nombre de usuario</h3>
                            <p><a href="#">Ver perfil de usuario</a></p>
                        </div>
                        <div className="soliciu-col3">
                            <button id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                            <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
                        </div>
                    </div>
                </div>
            </main> */}

            

        </>
    );
}

export default SolicitudesUsuarios;