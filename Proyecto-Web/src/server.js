require("dotenv").config();
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const app = require("./app");
const connectDB = require("./config/database");

connectDB();

const certPath = path.join(__dirname, "../cert");

const sslOptions = {
  key: fs.readFileSync(path.join(certPath, "key.pem")),
  cert: fs.readFileSync(path.join(certPath, "cert.pem")),
};

const HTTPS_PORT = 3000;
const HTTP_PORT = 4000;

https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
  console.log(`Servidor EXPRESS HTTPS en https://localhost:${HTTPS_PORT}`);
});

http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`Servidor EXPRESS HTTP para nginx en http://localhost:${HTTP_PORT}`);
});
