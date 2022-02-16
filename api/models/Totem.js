const mongoose = require('mongoose')
const Schema = mongoose.Schema

const functionalitySchema = new Schema({
  name: String,
  label: String,
  icon: String,
  order: Number,
  hidden: Boolean,
  disabled: Boolean,
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