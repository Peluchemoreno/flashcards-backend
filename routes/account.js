const router = require('express').Router()
const {getCurrentUser} = require('../controllers/user')

router.get('/', getCurrentUser)

module.exports = router