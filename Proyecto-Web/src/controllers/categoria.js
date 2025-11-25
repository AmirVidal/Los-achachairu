const Categoria = require('../models/categoria');

exports.crearCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Categoría eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
