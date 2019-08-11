const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'group'
  },
  description: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
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
    },
  }
}, { timestamps: true })

const Event = mongoose.model('event', EventSchema);

module.exports = { Event };