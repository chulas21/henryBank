const server = require('express').Router();
const accountsController = require('../../controllers/accounts.controller')

server.get('/:id', (req, res) => {
    const {id} = req.params

    accountsController.getAccount(id)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => res.status(400).json(err))
}) 

module.exports = server 