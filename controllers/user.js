const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const JWT_SECRET = require('../utils/config');

function getCurrentUser(req, res){
  console.log('get current user')
  res.send({message: 'implement jwt and login for users'})
}

function login(req, res){
  const {email, password} = req.body;

  if (!email || !password){
    return res.status(400).send({message: 'come back to properly this error for missing email or pass'})
  }

  User.findOne({email}).select('+password')
  .then(user => {
    if (!user){
      return res.send({message: "incorrect username or password"})
    }

    return bcrypt.compare(password, user.password)
    .then((matched) => {
      if (!matched){
        return res.send({message: "incorrect username or password"})
      }
      return user
    }).then(user => {
      const token = jwt.sign({_id: user._id}, JWT_SECRET, {expiresIn: "1h"});

      res.send({token})
    }).catch(err => {
      return res.send({message: err.message})
    })
  })
  
}

function createUser(req, res){
  const {name, email, password} = req.body;

  User.findOne({email})
  .then(user =>{
    if (user){
      const error = new Error('duplicate email')
      error.statusCode = 410;
      error.message = "duplicate email"
      return res.send({message: 'duplicate email handle this error better'})
    }
    return bcrypt.hash(password, 10);
  }).then(hash => {
    User.create({
      name,
      email,
      password: hash
    })
    .then(user => {
      res.send(201).send({
        name: user.name,
        email: user.email
      })
    }).catch(err => {
      console.error(err)
    })
  })
}

module.exports = {
  getCurrentUser,
  createUser,
  login
}