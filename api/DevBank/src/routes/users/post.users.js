const server = require("express").Router();
const userController = require("../../controllers/users.controller");
const nodemailerController = require("../../controllers/nodemailer.controller");
const nodemailer = require("nodemailer");
var bcrypt = require("bcryptjs");
const { User } = require("../../database/db");

server.post("/", (req, res) => {
  var user = req.body;
  var password = req.body.password;
  // var salt = bcrypt.genSaltSync(10);
  // user.password = bcrypt.hashSync(password, salt);
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  user.password = hash;

  userController
    .createUser(user)
    .then((value) => {
      if (!value) {
        return res.status(400).json({ msg: "User already exist" });
      }

      const url = "www.google.com";

      const data = {
        from: "DevBank <devbank2021@gmail>",
        to: `${value.email}`,
        subject: "Welcome to DevBank",
        html: `
                        <h2> Nice to meet you </h2>
                        <br>
                        <br>
                        <br>
                        <p> Almost ready, first click <a href='http://localhost:8000/${value.id}'>here</a> and finish your check Out</p> 
                        <br>
                        <br>
                        <br>
                        <p><strong>Thank you so much</strong></p>
                    `,
      };

      return nodemailerController.sendEmail(data);
    })
    .then(() => {
      res.status(200).json({ msg: "Check your email" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

server.post("/:userId", (req, res) => {
  const { userId } = req.params;

  console.log("EEEEEEEEEEEEEEE 16");
  userController
    .getOneUser(userId)
    .then((user) => {
    //   console.log("EEEEEEEEEEEEEEE 1");
    //   if (!user) {
    //     return res.status(400).json({ msg: "User does not exist" });
    //   }
    //   return userController.updateInfo(user, info);
    // })
    // .then((user) => {
      console.log("EEEEEEEEEEEEEEE 2");
      var cvu = 10000001233 - userId + 500;
      var data = {
        userId,
        acconutNumber: cvu,
        balance: 0,
        currency: "PESOS",
        cvu,
        type: "CAJA DE AHORRO",
      };
      return userController.createdAccount(data);
    })
    .then((user) => {
      console.log("EEEEEEEEEEEEEEE 3");
      var cvu = 10000001233 - userId + 1000;
      var data = {
        userId,
        acconutNumber: cvu,
        balance: 0,
        currency: "USD",
        cvu,
        type: "CAJA DE AHORRO",
      };
      return userController.createdAccount(data);
    })
    .then((response) => {
      console.log("EEEEEEEEEEEEEEE 4");
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log("EEEEEEEEEEEEEEE 5");
      res.status(400).json(err);
    });
});

server.post("/:userId", (req, res) => {
  const info = req.body;
  const { userId } = req.params;

  userController
    .getOneUser(userId)
    .then((user) => {
      if (!user) {
        return res.status(400).json({ msg: "User does not exist" });
      }
      return userController.updateInfo(user, info);
    })
    .then((user) => {
      var cvu = 10000001233 - userId + 500;
      var data = {
        userId,
        acconutNumber: 1,
        balance: 0,
        currency: "PESOS",
        cvu,
        type: "CAJA DE AHORRO",
      };
      return userController.createdAccount(data);
    })
    .then((user) => {
      var cvu = 10000001233 - userId + 1000;
      var data = {
        userId,
        acconutNumber: 2,
        balance: 0,
        currency: "USD",
        cvu,
        type: "CAJA DE AHORRO",
      };
      return userController.createdAccount(data);
    })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = server;
