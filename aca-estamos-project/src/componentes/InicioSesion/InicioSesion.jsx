import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../../Efectos/Loading';

export const InicioSesion = () => {

  const [loading, setLoading] = useState(false)

  const cambiarEstado = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);

    }, 3000);
  }
  if (loading) {
    return (
      <Loading />
    )
  }
  else {
    return (
      <>
        <section>
          <main className="d-flex justify-content-center" style={{ marginTop: '80px', marginBottom: '120px' }}>
            <div className="row" id="nuevoregistro">
              <div className="col align-self-center">
                <div className="border p-4" style={{ fontFamily: 'Poppins-Regular', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                  <div className="row align-items-center">
                    <div className="col-12">
                      <h1 style={{ fontFamily: 'Heavitas' }} className="text-center"><strong>Iniciar sesión</strong></h1>
                      <h3 className="text-center" style={{ paddingTop: '40px' }}><strong>Seleccione tipo de usuario:</strong></h3>
                    </div>
                  </div>
                  <div className="row align-items-center" style={{ paddingTop: '60px' }}>
                    <div className="col-6">
                      <button type="button" className="btn btn-light btn-lg me-2">
                        <img src="../Img/usuario-renca.png" alt="Descripción de la imagen" className="img-fluid"></img>
                      </button>
                    </div>
                    <div className="col-6">
                      <button type="button" className="btn btn-light btn-lg me-2" onClick={()=>cambiarEstado}>
                        <img src="../Img/empresas-renca.png" alt="Descripción de la imagen" className="img-fluid"></img>
                      </button>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h3 className="text-center">Busca empleos<br />como usuario<br /></h3>
                    </div>
                    <div className="col-6">
                      <h3 className="text-center">Publica empleos<br />como empresa<br /></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </>
    );
  };

}


export default InicioSesion;
