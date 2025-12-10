require("dotenv").config();
const fs = require("fs");
const path = require("path");
const https = require("https");
const app = require("./app");
const connectDB = require("./config/database");

connectDB();

const certPath = path.join(__dirname, "../cert");

const options = {
  key: fs.readFileSync(path.join(certPath, "key.pem")),
  cert: fs.readFileSync(path.join(certPath, "cert.pem"))
};

const PORT = process.env.PORT || 3000;

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor HTTPS funcionando en https://localhost:${PORT}`);
});