const server = require('express').Router();
const { User, Account } = require("../../database/db")

//traemos tosas las cuentas
server.get('/', (req, res, next) => {
    Account.findAll({
      include: {
        all: true
      }
    })
      .then(account => {
        res.send(account);
      })
      .catch((error) => {
        send(error)
      });
  });

//crear cuenta a un usuario
server.post("/create", function (req, res) {

    Account.create(req.body)
      .then((response) => {
        return res.status(201).send(response);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
//   res.send("Crear cuentas");
});

module.exports = server;