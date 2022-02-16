const express = require('express')
const Users = require('../models/Users')
const { isAuthenticated, hasRole } = require('../auth')

const router = express.Router()

router.get('/', (req, res) => {
  Users.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', isAuthenticated, (req, res) => {
  const { _id } = req.user
  Users.create({ ...req.body, user_id: _id }).then(x => res.status(201).send(x))
})

router.put('/:id', isAuthenticated, (req, res) => {
  Users.findOneAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', isAuthenticated, (req, res) => {
  Users.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router