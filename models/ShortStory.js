const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const ShortStorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  story: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedDate: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
    type: String,
    required: true
  },
});

module.exports = ShortStory = mongoose.model('short-story', ShortStorySchema);
