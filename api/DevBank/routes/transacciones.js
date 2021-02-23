const app = require("express").Router();

app.get('/transacciones', (req, res, next) => {
    res.send(["Tony","Lisa","Michael","Ginger","Food"])
})
app.get('/transacciones/hola', (req, res, next) => {
    res.send("Hello")
})

module.exports = app;




