require("dotenv").config();
const express = require("express");
const app = require("./app");
const connectDB = require("./config/database");

connectDB();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});