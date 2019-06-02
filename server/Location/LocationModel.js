const mongoose = require('mongoose');
const { Schema } = mongoose;

// add
const LocationSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
  },
  enabled: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Location =  mongoose.model('location', LocationSchema);

module.exports = { Location };