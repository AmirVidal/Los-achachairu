require("dotenv").config();
const fs = require("fs");
const path = require("path");
const http2 = require("http2");

const app = require("./app");                      // ← CORREGIDO
const connectDB = require("./config/database");   // ← CORREGIDO

connectDB();

const certPath = path.join(__dirname, "../cert"); // ← CORREGIDO (sube un nivel)

const options = {
  key: fs.readFileSync(path.join(certPath, "key.pem")),
  cert: fs.readFileSync(path.join(certPath, "cert.pem")),
  allowHTTP1: true
};

const PORT = process.env.PORT || 3000;

const server = http2.createSecureServer(options, app);

server.listen(PORT, () => {
  console.log(`🚀 Servidor HTTPS + HTTP/2 funcionando en https://localhost:${PORT}`);
});



