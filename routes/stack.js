const router = require('express').Router();

const { getStacks, createStack } = require('../controllers/stacks');
const { getCards } = require('../controllers/cards');

router.get('/', getStacks);
router.get('/:stackId/:cardId', getCards)
router.post('/', createStack)

module.exports = router;