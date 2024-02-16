import React from 'react'

const Contacto = () => {
    return (
        <div>
            <div id=Editperfilempresa style="margin: 50px auto; max-width: 800px;">
        <div class="border p-4"
            style="font-family:Poppins-Regular; margin: 50px auto 50px auto; background-color: #D9F2ED; border-radius: 10px; border-style: solid; border-color: black; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
            <h2 style="font-family:Heavitas" class="text-center">Editar Perfil Empresa</h2>
            <div class="form-DatosEmpresa">
                <form>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="nombres" class="form-label">Nombre Empresa:</label>
                                <input type="text" class="form-control" id="nombre-empresa" placeholder="Nombre">
                            </div>
                            <div class="mb-3">
                                <label for="apellidos" class="form-label">Rut:</label>
                                <input type="text" class="form-control" placeholder="11.111.111-1">
                            </div>
                            <div class="mb-3">
                                <label for="telefono" class="form-label">Giro o Rubro:</label>
                                <input type="text" class="form-control" placeholder="Hoteleria">
                            </div>
                            <div class="mb-3">
                                <label for="rut" class="form-label">Acerca de:</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="correo" class="form-label">Trayectoria:</label>
                                <input type="text" class="form-control" placeholder="Trayectoria de tu empresa">
                            </div>
                            <div class="mb-3">
                                <label for="estadoCivil" class="form-label">Cantidad de empleados:</label>
                                <input type="text" class="form-control" placeholder="Ejemplo: 200">
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="perfilLinkedIn" class="form-label">Correo:</label>
                                <input type="text" class="form-control" placeholder="correo@gmail.com">
                            </div>
                            <div class="mb-3">
                                <label for="perfilLinkedIn" class="form-label">Teléfono:</label>
                                <input type="text" class="form-control" placeholder="(9)12345678">
                            </div>
                            <div class="mb-3">
                                <label for="perfilLinkedIn" class="form-label">Ubicación:</label>
                                <input type="text" class="form-control" placeholder="Ej. Av. marina 000, stgo">
                            </div>
                            <div class="mb-3">
                                <label for="perfilLinkedIn" class="form-label">Página Web:</label>
                                <input type="text" class="form-control" placeholder="URL">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Adjuntar imagen de Empresa o logotipo:</label>
                                <input class="form-control" type="file">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-secondary btn-lg me-2">Cancelar</button>
                        <button type="button" class="btn btn-primary btn-lg">Guardar</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Contacto