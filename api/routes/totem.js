const express = require('express')
const Totem = require('../models/Totem')
const { isAuthenticated, hasRole } = require('../auth')

const router = express.Router()

router.get('/', isAuthenticated, (req, res) => {
  Totem.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
  Totem.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', isAuthenticated, (req, res) => {
  Totem.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', isAuthenticated, (req, res) => {
  Totem.findOneAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', isAuthenticated, (req, res) => {
  Totem.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router