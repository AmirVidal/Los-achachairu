const express = require('express');
const router = express.Router();
const controller = require('../controllers/dificultad');

router.post('/', controller.crearDificultad);
router.get('/', controller.obtenerDificultades);
router.put('/:id', controller.actualizarDificultad);
router.delete('/:id', controller.eliminarDificultad);

module.exports = router;