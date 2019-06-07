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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'location'
  }
}, { timestamps: true })

const Event = mongoose.model('event', EventSchema);

module.exports = { Event };