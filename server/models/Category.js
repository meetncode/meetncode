const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  enabled: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Category =  mongoose.model('category', CategorySchema);

module.exports = { Category };