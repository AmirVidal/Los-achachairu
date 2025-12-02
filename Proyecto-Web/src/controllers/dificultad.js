const Dificultad = require('../models/dificultad');

exports.crearDificultad = async (req, res) => {
  try {
    const dif = await Dificultad.create(req.body);
    res.status(201).json(dif);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerDificultades = async (req, res) => {
  try {
    const dif = await Dificultad.find();
    res.json(dif);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerDificultad = async (req, res) => {
  try {
    const dif = await Dificultad.findById(req.params.id);

    if (!dif) {
      return res.status(404).json({ mensaje: "Dificultad no encontrada" });
    }

    res.json(dif);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarDificultad = async (req, res) => {
  try {
    const dif = await Dificultad.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(dif);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarDificultad = async (req, res) => {
  try {
    await Dificultad.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Dificultad eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

