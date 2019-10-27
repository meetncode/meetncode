const mongoose = require('mongoose')
const { Schema } = mongoose

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
    country: {
      type: String,
      require: true
    },
    city: {
      type: String,
      require: true
    },
    locationCoordinates: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      },
    }
  },
  hometown: String,
  language: String,
  birthday: String,
  gender: String,
  bio: String,
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event'
  }],
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  }],
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'group'
  }],
  enabled: {
    type: Boolean,
    default: true
  },
  picture: String
}, { timestamps: true })

const User =  mongoose.model('user', UserSchema)

module.exports = { User }