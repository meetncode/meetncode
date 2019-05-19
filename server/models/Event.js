const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    require: true
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  }
})

const Event = mongoose.model('event', EventSchema);

module.exports = { Event };