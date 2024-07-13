const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    validate: {
      validator(v){
        return validator.isAlphanumeric(v);
      }
    } 
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator(v){
      return validator.isEmail(v) 
      },
      message: "You must enter a valid email address"
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User