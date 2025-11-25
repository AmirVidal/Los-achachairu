const express = require('express');
const router = express.Router();
const controller = require('../controllers/rangoEdad');

router.post('/', controller.crearRangoEdad);
router.get('/', controller.obtenerRangosEdad);
router.put('/:id', controller.actualizarRangoEdad);
router.delete('/:id', controller.eliminarRangoEdad);

module.exports = router;