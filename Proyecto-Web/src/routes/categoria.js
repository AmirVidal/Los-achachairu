const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria');
const { validarCategoria } = require('../validators/categoria');
const validarCampos = require('../middlewares/validarCampos');

router.post('/', validarCategoria, validarCampos, controller.crearCategoria);

router.put('/:id', validarCategoria, validarCampos, controller.actualizarCategoria);

router.get('/', controller.obtenerCategorias);
router.get('/:id', controller.obtenerCategoria);
router.delete('/:id', controller.eliminarCategoria);

module.exports = router;
