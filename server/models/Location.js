const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocationSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
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
});

const Location =  mongoose.model('location', LocationSchema);

module.exports = { Location };