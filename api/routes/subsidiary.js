const express = require('express')
const Subsidiary = require('../models/Subsidiary')
const { isAuthenticated, hasRole } = require('../auth')

const router = express.Router()

router.get('/', isAuthenticated, (req, res) => {
  Subsidiary.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
  Subsidiary.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', isAuthenticated, (req, res) => {
  Subsidiary.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', isAuthenticated, (req, res) => {
  Subsidiary.findOneAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', isAuthenticated, (req, res) => {
  Subsidiary.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router