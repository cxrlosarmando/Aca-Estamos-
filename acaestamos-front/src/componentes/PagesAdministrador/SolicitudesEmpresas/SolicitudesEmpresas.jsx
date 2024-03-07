import React from 'react';
import './SolicitudesEmpresas.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SolicitudesEmpresas = () => {
  const [solicitudesEmpresas, setSolicitudesEmpresas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Empresas')
      .then(res => {
        const solicitudesEmp = res.data.data.filter(solicitudesEmpresas => !solicitudesEmpresas.aceptado);
        setSolicitudesEmpresas(solicitudesEmp);
      }).catch(err => {
        console.error('Error en obtener la información', err);
      })

  }, []);

  function handleSubmitEmp(_id) {
    const conf = window.confirm('Seguro que quieres aceptar esta Empresa?');
    if (conf) {
      axios.put(`http://localhost:3000/Empresa-Aceptada/${_id}`)
        .then(res => {
          alert('Empresa Aceptada');
          const newSolicitudesEmp = solicitudesEmpresas.filter(solicitud => solicitud._id !== _id);
          setSolicitudesEmpresas(newSolicitudesEmp);
        })
        .catch(err => {
          console.error('Error al aceptar la empresa', err);
        });
    }
  }


  return (
    <>
      <div className="container-fluid">
        <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Solicitudes de nuevas empresas</h1>
      </div>

      {solicitudesEmpresas.map((solicitud) => (

        <main className="solicitudesEmp" key={solicitud._id}>
          <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: '#03a6883b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
            <div className="solici-row">
              <div className="solici-col1">
                <img src={solicitud && solicitud.ImagenEmpresa ? `http://localhost:3000/uploads/${solicitud.ImagenEmpresa}` : "../Img/user-perfil.png"} id="user-perfil" />
              </div>
              <div className="solici-col2">
                <h3 className="Empresa">{solicitud.NombreEmpresa}</h3>
                <p><a href={`http://localhost:5173/Perfil-Empresa/${solicitud._id}`}>Ver perfil de la empresa</a></p>
              </div>
              <div className="solici-col3">
                <button onClick={e => handleSubmitEmp(solicitud._id)} id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
              </div>
            </div>
          </div>
        </main>
      ))}


      {/* 
 */}
      {/* <main className="solicitudesEmp">
        <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: '#03a6883b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
          <div className="solici-row">
            <div className="solici-col1">
              <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
            </div>
            <div className="solici-col2">
              <h3 className="Empresa">Nombre de la empresa</h3>
              <p><a href="#">Ver perfil de la empresa</a></p>
            </div>
            <div className="solici-col3">
              <button id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
              <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
            </div>
          </div>
        </div>
      </main>


      <main className="solicitudesEmp">
        <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: '#03a6883b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
          <div className="solici-row">
            <div className="solici-col1">
              <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
            </div>
            <div className="solici-col2">
              <h3 className="Empresa">Nombre de la empresa</h3>
              <p><a href="#">Ver perfil de la empresa</a></p>
            </div>
            <div className="solici-col3">
              <button id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
              <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
            </div>
          </div>
        </div>
      </main>


      <main className="solicitudesEmp">
        <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: '#03a6883b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
          <div className="solici-row">
            <div className="solici-col1">
              <img src="../Img/user-perfil.png" alt="Imagen perfil" id="user-perfil" />
            </div>
            <div className="solici-col2">
              <h3 className="Empresa">Nombre de la empresa</h3>
              <p><a href="#">Ver perfil de la empresa</a></p>
            </div>
            <div className="solici-col3">
              <button id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
              <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
            </div>
          </div>
        </div>
      </main> */}



    </>
  );
}

export default SolicitudesEmpresas;