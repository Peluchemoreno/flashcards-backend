const mongoose = require('mongoose');
const {cardSchema} = require('./card')

const stackSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  cards: [cardSchema]
})

const Stack = mongoose.model('stacks', stackSchema)



module.exports = Stack;