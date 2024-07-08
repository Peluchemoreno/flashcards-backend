const router = require('express').Router();
const stackRouter = require('./stack')

router.use('/stacks', stackRouter);

router.use((req, res)=>{
  res.status(404).send({message: "Requested resource not found"})
})

module.exports = router;