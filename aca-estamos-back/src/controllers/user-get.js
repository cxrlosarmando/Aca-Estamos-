const User = require("../models/user-model"); 

const listaUsuarios = async (req, res) => {
    const respuesta = await User.find({});
    res.status(200).send(respuesta); 
};
module.exports = listaUsuarios;
