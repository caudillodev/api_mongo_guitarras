const mongoose = require("mongoose");

// Definición del esquema para la colección de usuarios
const usuarioSchema = new mongoose.Schema(
  {
    // Campo para el nombre del usuario, es obligatorio
    nombre: { type: String, required: true },

    // Campo para la edad del usuario, es obligatorio
    edad: { type: Number, required: true },

    // Campo para el email del usuario, es obligatorio
    email: { type: String, required: true },
  },
  {
    // Añade campos de timestamps (createdAt y updatedAt)
    timestamps: true,
  }
);

// Creación del modelo Usuario basado en el esquema usuarioSchema
const Usuario = mongoose.model("Usuario", usuarioSchema);

// Exportación del modelo Usuario para su uso en otras partes de la aplicación
module.exports = Usuario;