const Card = require('../models/card');

function getCards(req, res){
  Card.find({stack: stackId}).then(stack => {
    res.send(stack)
    .orFail()
  }).catch(err => {
    console.error(err)
  })
}


module.exports = {
  getCards
}
