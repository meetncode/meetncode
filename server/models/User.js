const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  hometown: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  enabled: {
    type: Boolean,
    default: true
  }
})

const User =  mongoose.model('user', UserSchema);

module.exports = { User };