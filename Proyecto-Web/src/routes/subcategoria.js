const express = require('express');
const router = express.Router();

const controller = require('../controllers/subcategoria');
const { validarSubcategoria } = require('../validators/subcategoria');
const validarCampos = require('../middlewares/validarCampos');

router.post('/', validarSubcategoria, validarCampos, controller.crearSubcategoria);
router.get('/', controller.obtenerSubcategorias);
router.get('/:id', controller.obtenerSubcategoria);
router.put('/:id', validarSubcategoria, validarCampos, controller.actualizarSubcategoria);
router.delete('/:id', controller.eliminarSubcategoria);

module.exports = router;
