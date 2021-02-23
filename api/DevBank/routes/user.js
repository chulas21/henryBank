const app = require("express").Router();

app.get('/users', (req, res, next) => {
    res.send(["Tony","Lisa","Michael","Ginger","Food"])
})
app.get('/users/hola', (req, res, next) => {
    res.send("Hello user")
})

module.exports = app;
