const server = require("express").Router();
const userController = require("../../controllers/auth.controller");
const { User, Account } = require("../../database/db");
// const passport = require("passport");
const bcrypt = require("bcryptjs");

server.post("/login", function (req, res) {
  const { username, password } = req.body;
  User.findOne({
    where: {
      email: username,
    }
  })
    .then((response) => {
      console.log("LINEA 16", res.dataValues);
      var clave = response.dataValues.password;
      if (bcrypt.compareSync(password, clave)) {
        console.log("entre aca");
        req.session.user = response.dataValues;
        res.json(response.dataValues);
      } else {
        res.send("login failed");
      }
    })
    .catch((err) => {
      res.send("login failed");
    });
});

server.post("/logout", (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

server.get("/me", (req, res) => {
  if (req.session.user) return res.json(req.session.user);
  else return res.status(401).send("No estás logeado");
});

module.exports = server;
