const Usuario = require('../models/usuario');
const bcrypt = require("bcryptjs");

exports.crearUsuario = async (req, res) => {
  try {
    const { rol } = req.body;

    if (rol === "gestor") {
      const existeGestor = await Usuario.findOne({ rol: "gestor" });

      if (existeGestor) {
        return res.status(400).json({
          error: "Ya existe un gestor en el sistema"
        });
      }
    }

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const usuario = await Usuario.create(req.body);

    usuario.password = undefined;

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.autorizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      { autorizadoPorGestor: true },
      { new: true }
    );

    res.json({
      mensaje: "Usuario autorizado correctamente",
      usuario
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};