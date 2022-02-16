const mongoose = require('mongoose')
const Schema = mongoose.Schema

const functionalitySchema = new Schema({
  name: String,
  label: String,
  icon: String,
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

const Subsidiary = mongoose.model('Subsidiary', new Schema({
  name: String,
  code: String,
  totems: [totemSchema]
}))

module.exports = Subsidiary