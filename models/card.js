const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  stack: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  question: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
  },
  answer: {
    type: String,
    minlength: 1,
    required: true,
  }
})

const Card = mongoose.model('card', cardSchema);

module.exports = Card;