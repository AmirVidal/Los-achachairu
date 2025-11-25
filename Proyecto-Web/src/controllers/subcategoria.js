const Subcategoria = require('../models/subcategoria');

exports.crearSubcategoria = async (req, res) => {
  try {
    const sub = await Subcategoria.create(req.body);
    res.status(201).json(sub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerSubcategorias = async (req, res) => {
  try {
    const subcategorias = await Subcategoria.find().populate("categoria");
    res.json(subcategorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerSubcategoria = async (req, res) => {
  try {
    const sub = await Subcategoria.findById(req.params.id).populate("categoria");
    res.json(sub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarSubcategoria = async (req, res) => {
  try {
    const sub = await Subcategoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(sub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarSubcategoria = async (req, res) => {
  try {
    await Subcategoria.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Subcategoría eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
