const mongoose = require('mongoose');

const stackSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Stack = mongoose.model('stacks', stackSchema)



module.exports = Stack;