import './PerfilEmpresa.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';

const PerfilEmpresa = () => {

    const [PerfilE, setPerfilE] = useState(null);

    useEffect(() => {
        const obtenerPerfilE = async () => {
            try {
                const response = await client.get(`http://localhost:3000/Obtener-Perfil-Empresa/${getUserId()}`);
                setPerfilE(response.data);
            } catch (error) {
                if (error.response) {
                    console.error('Error en la respuesta:', error.response.data);
                } else if (error.request) {
                    console.error('Error en la solicitud:', error.request);
                } else {
                    console.error('Error general:', error.message);
                }
            }
        };

        obtenerPerfilE();
    }, []);
    
    return (
        <>
            <h2 className="mi-perfil"><br />Mi perfil Empresa</h2>

            <main className="perfilempresa">
                <div className="container-fluid" style={{ fontFamily: 'Poppins-Regular', backgroundColor: '#D9F2ED', borderRadius: '10px' }}>
                    <div className="row-perfile">
                        <div className="col-perfile1">
                            <img src={PerfilE && PerfilE.ImagenEmpresa ? `http://localhost:3000/uploads/${PerfilE.ImagenEmpresa}` : "../Img/user-perfil.png"} alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="col-perfile2">
                            <h3 className="Nombre-perfile"> {PerfilE && PerfilE.NombreEmpresa}</h3>
                            <ul className="Elementos-perfile">
                                <li><a><b>Correo:</b> {PerfilE && PerfilE.Email}</a></li>
                                <li><a><b>Descripción del perfil:</b> {PerfilE && PerfilE.Acercade}</a></li>
                            </ul>
                        </div>
                        <div className="col-perfile3">
                            <div className="actualizar-datos">
                                <p><Link to="/Edit-Perfil-Empresa">Actualizar datos Empresa</Link></p>
                                <Link to="/Edit-Perfil-Empresa"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="elementos-adjuntos">
                        <div className="row">
                            <div className="col">
                                <div className="colcv">
                                    <p><Link to="/Info-Empresa">Mostrar Perfil</Link></p>
                                    <Link to="/Info-Empresa"><img src="../Img/mostrar.png" alt="Mostrar perfil icon" id="mostrar-perfil" /></Link>
                                    <p><Link to="/Edit-Info-Empresa">Actualizar Perfil</Link></p>
                                    <Link to="/Edit-Info-Empresa"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PerfilEmpresa;
