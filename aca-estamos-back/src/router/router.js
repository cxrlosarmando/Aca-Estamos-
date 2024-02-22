const express = require('express');
const router = express.Router();
const listaUsuarios = require('../controllers/user-get');
const CrearUsuario = require('../controllers/user-create');
const DeleteUser = require('../controllers/user-delete');
const ActualizarUser = require('../controllers/user-update');
const IdUsuario = require('../controllers/user-get-id');

//Router   USUARIOS //
router.get('/', listaUsuarios);

router.get('/:id', IdUsuario);

router.post('/crear-usuario', CrearUsuario);

router.put('/:id', ActualizarUser);

router.delete('/:id', DeleteUser);

//Router   EMPRESAS //


//Router   ADMINISTRADOR //


module.exports = router;
