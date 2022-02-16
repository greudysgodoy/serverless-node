const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')
const subsidiary = require('./routes/subsidiary')
const totem = require('./routes/totem')
const users = require('./routes/users')

const app = express() 
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true})

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)
app.use('/api/subsidiaries', subsidiary)
app.use('/api/totems', totem)
app.use('/api/users', users)
module.exports = app
