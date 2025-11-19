// Controlador de ejemplo

function getMensaje(req, res) {
    res.json({
        message: "Hola desde el controlador!"
    });
}

module.exports = {
    getMensaje
};