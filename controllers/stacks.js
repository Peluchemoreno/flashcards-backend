const Stack = require('../models/stack')

const getStacks = (req, res) => {
  Stack.find().then((stacks)=>{
    res.send(stacks)
  })
}

module.exports = {
  getStacks,
}