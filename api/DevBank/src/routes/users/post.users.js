const server = require('express').Router();
const userController = require('../../controllers/users.controller');
const nodemailerController = require('../../controllers/nodemailer.controller');
const nodemailer = require('nodemailer');
var bcrypt = require("bcryptjs");
const {User} = require('../../database/db')



server.post('/', (req, res) => {
    var user = req.body
    var password = req.body.password

    var salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);


    userController.createUser(user)
        .then((value) => {
            if (!value) {
                return res.status(400).json({ msg: 'User already exist' })
            }

            const data = {
                from: 'DevBank <devbank2021@gmail>',
                to: `${value.email}`,
                subject: "Welcome to DevBank",
                html:  `
                        <h2> Nice to meet you </h2>
                        <br>
                        <br>
                        <br>
                        <p> Almost ready, first click <a href='localhost:8080/users/${value.id}'>here</a> and finish your check Out</p> 
                        <br>
                        <br>
                        <br>
                        <p><strong>Thank you so much</strong></p>
                       `

            }
            
            return nodemailerController.sendEmail(data)
        })  
        .then(() => {
            res.status(200).json({msg: 'Check your email'})
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

server.post('/:userId', (req, res) => {
    const info = req.body
    const {userId} = req.params

    userController.getOneUser(userId)
        .then((user) => {
            if(!user){
                return res.status(400).json({msg:'User does not exist'})
            }
            return userController.updateInfo(user, info)
        })
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})



module.exports = server;