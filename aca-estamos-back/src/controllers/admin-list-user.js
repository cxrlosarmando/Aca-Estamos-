const User = require("../models/user-model");

const listaUsuariosAceptados = async (req, res) => {
    try {
        const usuarios = await User.find({ aceptado: true }, 'Nombre Apellido Rut Email');
        console.log(usuarios);

        res.status(200).json({
            code: 200,
            msg: "Lista de usuarios aceptados obtenida con éxito",
            data: usuarios
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

module.exports = listaUsuariosAceptados;
