const RangoEdad = require('../models/rangoEdad');

exports.crearRangoEdad = async (req, res) => {
  try {
    const rango = await RangoEdad.create(req.body);
    res.status(201).json(rango);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerRangosEdad = async (req, res) => {
  try {
    const rangos = await RangoEdad.find();
    res.json(rangos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarRangoEdad = async (req, res) => {
  try {
    const rango = await RangoEdad.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(rango);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarRangoEdad = async (req, res) => {
  try {
    await RangoEdad.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Rango de edad eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
