const express = require('express');
const listaUsuarios = require('../controllers/user-get');
const CrearUsuario = require('../controllers/user-create');
const router = express.Router();

//Router   USUARIOS //
router.get('/', listaUsuarios);

router.post('/crear-usuario', CrearUsuario)

//Router   EMPRESAS //


//Router   ADMINISTRADOR //


module.exports = router;
