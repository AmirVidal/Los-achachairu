const Usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const sonIguales = await bcrypt.compare(password, usuario.password);

    if (!sonIguales) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    if (!usuario.autorizadoPorGestor && usuario.rol !== "gestor") {
      return res.status(403).json({ error: "Tu cuenta aún no ha sido autorizada" });
    }

    const token = jwt.sign(
      {
        id: usuario._id,
        rol: usuario.rol,
        nombre: usuario.nombre
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    res.json({
      mensaje: "Login exitoso",
      token
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};