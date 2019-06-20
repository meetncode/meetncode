const mongoose = require('mongoose');
const { Schema } = mongoose;

// Add location

const GroupSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  private: {
    type: Boolean,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  },
  events : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event'
  }],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'location'
  },
  enabled: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Group = mongoose.model('group', GroupSchema);

module.exports = { Group };