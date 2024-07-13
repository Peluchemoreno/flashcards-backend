const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  answer: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 300,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  stack: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
})

const Card = mongoose.model('card', cardSchema);

module.exports = {
  Card, 
  cardSchema
};