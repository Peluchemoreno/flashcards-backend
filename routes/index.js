const router = require('express').Router();
const stackRouter = require('./stack')
const accountRouter = require('./account')
const {createUser} = require('../controllers/user')
const {login} = require('../controllers/user')
const authorize = require('../middleware/auth')

router.use('/stacks', authorize, stackRouter);
router.post('/login', login)
router.post('/sign-up', createUser)
router.use('/me', authorize, accountRouter)

router.use((req, res)=>{
  res.status(404).send({message: "Requested resource not found"})
})

module.exports = router;