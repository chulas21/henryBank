const express = require('express');
const router = express.Router();

//routes Users
const postUsers = require('./users/post.users');
const getUsers = require('./users/get.users');
const postAuth = require('./auth/post.auth');
const transfer = require("./transfer/tranfer")
const contact = require ("./contact/contact")
const account = require("./account/account")



// tranfer
router.use('/users/transfer', transfer);
// auth login
router.use('/users/auth',postAuth);
//Contact route
router.use('/users/contact', contact);
// Account rute
router.use('/account', account);
// use Users
router.use('/users', postUsers);
router.use('/users', getUsers);


module.exports = router;