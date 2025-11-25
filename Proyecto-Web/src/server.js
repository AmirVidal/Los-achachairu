require('dotenv').config();          // Carga variables
const app = require('./app');        // Tu app.js
const connectDB = require('./config/database');  // Conexión a Mongo

// Conectar a MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});


