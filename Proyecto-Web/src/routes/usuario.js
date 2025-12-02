const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuario');
const { validarUsuario } = require('../validators/usuario');
const validarCampos = require('../middlewares/validarCampos');

const auth = require('../middlewares/auth');
const verificarRol = require('../middlewares/verificarRol');

router.post(
    '/',
    auth,
    verificarRol(["gestor"]),
    validarUsuario,
    validarCampos,
    controller.crearUsuario
);

router.get(
    '/',
    auth,
    verificarRol(["gestor"]),
    controller.obtenerUsuarios
);

router.get(
    '/:id',
    auth,
    verificarRol(["gestor"]),
    controller.obtenerUsuario
);

router.put(
    '/:id',
    auth,
    verificarRol(["gestor"]),
    validarUsuario,
    validarCampos,
    controller.actualizarUsuario
);

router.delete(
    '/:id',
    auth,
    verificarRol(["gestor"]),
    controller.eliminarUsuario
);

router.patch(
    '/autorizar/:id',
    auth,
    verificarRol(["gestor"]),
    controller.autorizarUsuario
);

module.exports = router;