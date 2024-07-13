const Stack = require('../models/stack')

function getStacks(req, res) {
  Stack.find().then((stacks)=>{
    res.send(stacks)
  }).catch(err => {
    console.error(err)
  })
}

function createStack(req, res){
  Stack.create({
    owner: req.user,
    name: req.body.name
  }).then(stack => {
    res.status(201).send(stack)
  }).catch(err => {
    console.error(err)
  })
}

module.exports = {
  getStacks,
  createStack
}