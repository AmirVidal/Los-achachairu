const express = require('express');
const router = express.Router();
const controller = require('../controllers/rangoEdad');

router.post('/', (req, res) => {
  console.log("➡️ Entró a POST /api/rangos-edad");
  res.send("OK");
});
router.get('/', controller.obtenerRangosEdad);
router.put('/:id', controller.actualizarRangoEdad);
router.delete('/:id', controller.eliminarRangoEdad);

module.exports = router;