const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },

  correo: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  },

  rol: {
    type: String,
    enum: ["gestor", "editor", "encuestado"],
    required: true
  },

  autorizadoPorGestor: {
    type: Boolean,
    default: false
  },

  activo: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });
UsuarioSchema.methods.toJSON = function () {
  const usuario = this.toObject();
  delete usuario.password;
  return usuario;
};

module.exports = mongoose.model("Usuario", UsuarioSchema);