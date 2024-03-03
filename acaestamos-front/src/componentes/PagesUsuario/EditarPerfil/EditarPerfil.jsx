import React, { useState } from 'react';
import './EditarPerfil.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../../Efectos/useAlert';

const EditarPerfil = () => {

  //Definicion de constantes
  const [Nombre, setNombre] = useState('');
  const [Titular, setTitular] = useState('');
  const [Acercade, setAcercade] = useState('');
  const [Conocimientostecnicos, setConocimientostecnicos] = useState('');
  const [Cursosrealizados, setCursosrealizados] = useState('');
  const navigate = useNavigate();

  //Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  //Definicion de funciones
  const showAlert = () => {

    let hasError = true;

    if (!Nombre || !Titular || !Acercade || !Conocimientostecnicos || !Cursosrealizados) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se efectua la alerta de contenido vacio o incorrecto
    if (showAlert() === true) {
      try {
        const response = await axios.post('http://localhost:3000/Crear-Empresa', {
          Nombre,
          Titular,
          Acercade,
          Conocimientostecnicos,
          Cursosrealizados
        });
        alert(JSON.stringify(response.data, null, 2));
        navigate('/Perfil-Usuario')
      } catch (error) {
        console.error('Error al enviar la solicitud:', error.response?.data || error.message);
      }
    }

  };



  return (
    <>
      <div id="Editarperfil" style={{ margin: '50px auto', maxWidth: '800px' }}>
        <div
          className="border p-4"
          style={{
            fontFamily: 'Poppins-Regular',
            backgroundColor: 'rgba(4, 157, 217, 0.15)',
            borderRadius: '10px',
            borderStyle: 'solid',
            borderColor: 'black',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">
            Perfil
          </h2>
          <div className="form-Perfil" style={{ width: '80%', margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="cargo" className="form-label">
                  Nombre a mostrar:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="tipoEmpleo" className="form-label">
                  Titular:
                </label>
                <input type="text" className="form-control" placeholder="Desarrollador Web / Diseñador" value={Titular} onChange={(e) => setTitular(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="nombreEmpresa" className="form-label">
                  Acerca de:
                </label>
                <input type="text" className="form-control" value={Acercade} onChange={(e) => setAcercade(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Conocimientos Técnicos:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Excel Medio" value={Conocimientostecnicos} onChange={(e) => setConocimientostecnicos(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Cursos Realizados:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Inglés II" value={Cursosrealizados} onChange={(e) => setCursosrealizados(e.target.value)} />
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary btn-lg me-2">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary btn-lg" onClick={showAlert}>
                  Guardar
                </button>
              </div>
            </form>

            {/* Muestra la alerta si está visible */}
            {alertState.visible && (
              <div id="alertsElement" className={`alert ${alertState.type}`}>
                {alertState.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
