const express = require('express');
const router = express.Router();
const listaUsuarios = require('../controllers/user-get');
const CrearUsuario = require('../controllers/user-create');
const DeleteUser = require('../controllers/user-delete');
const ActualizarUser = require('../controllers/user-update');
const IdUsuario = require('../controllers/user-get-id');
const LoginUser = require('../controllers/user-login');
const CrearEmpresa = require('../controllers/emp-create');
const LoginEmpresa = require('../controllers/emp-login');

//Router   USUARIOS //
router.get('/Usuario', listaUsuarios);

router.get('/Usuario/:id', IdUsuario);

router.post('/Crear-usuario', CrearUsuario);

router.post('/Login-usuario', LoginUser)


router.put('/Actualizar-Usuario/:id', ActualizarUser);

router.delete('/Borrar-Usuario/:id', DeleteUser);

//Router   EMPRESAS //

router.post('/Crear-Empresa', CrearEmpresa);
router.post('/Login-empresa', LoginEmpresa);

//Router   ADMINISTRADOR //


module.exports = router;


