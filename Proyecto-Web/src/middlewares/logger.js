// Middleware para registrar cada petición al servidor
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // continuar con la siguiente función
}

module.exports = logger;