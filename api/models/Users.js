const mongoose = require('mongoose')
mongoose.set('toJSON', { virtuals: true });
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  password: String,
  salt: String,
  role: { type: String, default: 'user' }, //admin
})

userSchema.virtual('id').get(function() {
  return this._id;
});

const Users = mongoose.model('User', userSchema)

module.exports = Users