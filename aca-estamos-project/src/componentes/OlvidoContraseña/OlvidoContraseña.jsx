import React from 'react';
import './OlvidoContraseña.css'

const Experiencia = () => {
    return (
        <>
            <div id="Experiencia" style={{ margin: '50px auto', maxWidth: '800px' }}>
                <div
                    className="border p-4"
                    style={{ fontFamily: 'Poppins-Regular', backgroundColor: 'rgba(4, 157, 217, 0.15)', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', }}>
                    <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">
                        Experiencia Laboral
                    </h2>
                    <div style={{ width: '80%', margin: 'auto' }} className="form-Experiencia">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="cargo" className="form-label">
                                    Ingrese correo 
                                </label>
                                <input type="text" className="form-control" id="cargo" placeholder="CORREO ELECTRONICO" />
                            </div>
                      
                          
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary btn-lg me-2">
                                    Cancelar
                                </button>
                                <button type="button" className="btn btn-primary btn-lg">
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experiencia;
