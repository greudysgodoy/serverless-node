const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {
  v4: uuidv4,
} = require('uuid');

const functionalitySchema = new Schema({
  _uid: { type: String, default: uuidv4() },
  name: String,
  title: String,
  icon: String,
  order: Number,
  path: String,
  hidden: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})

const totemSchema = new Schema({
  code: String,
  subsidiary_id: { type: Schema.Types.ObjectId, ref: 'Subsidiary' },
  ip: String,
  status: String,
  functionalities: [functionalitySchema],
})

const Totem = mongoose.model('Totem', totemSchema)

module.exports = Totem