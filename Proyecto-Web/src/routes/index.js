const express = require('express');
const router = express.Router();

router.get('/hola', (req, res) => {
  res.json({ mensaje: 'Hola desde el backend con Node y Express' });
});

module.exports = router;