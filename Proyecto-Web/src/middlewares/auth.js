const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const tokenReal = token.split(" ")[1];
    const decoded = jwt.verify(tokenReal, process.env.JWT_SECRET);

    req.usuario = decoded; 
    next();

  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};