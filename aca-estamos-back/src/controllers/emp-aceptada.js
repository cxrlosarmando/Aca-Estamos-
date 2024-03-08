const Empresa = require("../models/user-models-empresa")


const listaEmpresas = async (req, res) => {
    try {
        const respuesta = await Empresa.find({aceptado: true}, 'Nombre Apellido Telefono Rut FechaNacimiento Email Password EstadoCivil Rubro LinkedIn Disponibilidad ArchivoPDF1 ArchivoPDF ArchivoPDF3 ArchivoPDF4 ImagenPerfil NivelEducacional InstitucionEducativa Titulo FechaInicio FechaFinalizacion Descripcion Cargo TipoEmpleo NombredelaEmp FechaExpInicio FechaExpFin CheckCargo DescripcionCargo NombreCV TitularCV AcercadeCV ConocimientosCV CursosCV' );

        res.status(200).json({
            code: 200,
            msg: "Lista de empresas obtenida con éxito",
            data: respuesta
        });
    } catch (error) { 
        console.error(error);
        
        res.status(500).json({
            code: 500,
            msg: "Error interno del servidor",
            data: null

        });
    }
};

module.exports = listaEmpresas;