const router = require('express').Router();

const { getStacks } = require('../controllers/stacks');

router.get('/', getStacks);

module.exports = router;