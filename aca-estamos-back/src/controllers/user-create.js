const User = require("../models/user-model");

const CrearUsuario = async (req, res) => {
    const body = req.body;

    try {
        const nuevoUsuario = await User.create(body);

        res.status(201).json({
            code: 201,
            msg: "Usuario creado con éxito",
            data: nuevoUsuario
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

module.exports = CrearUsuario;
