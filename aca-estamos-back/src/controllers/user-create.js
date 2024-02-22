const User = require("../models/user-model"); 

const CrearUsuario = async (req, res) => {
    const body = req.body;
    await User.create(body);
    res.status(200).send("Usuario creado");
};

module.exports = CrearUsuario;
