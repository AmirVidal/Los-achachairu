const express = require('express');
const router = express.Router();
const controller = require('../controllers/subcategoria');

router.post('/', controller.crearSubcategoria);
router.get('/', controller.obtenerSubcategorias);
router.get('/:id', controller.obtenerSubcategoria);
router.put('/:id', controller.actualizarSubcategoria);
router.delete('/:id', controller.eliminarSubcategoria);

module.exports = router;