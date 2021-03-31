const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ["user", "admin"]
  }
})

const User = mongoose.model('user', UserSchema)

module.exports = User;