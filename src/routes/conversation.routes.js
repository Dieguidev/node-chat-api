const { Router } = require('express');
const {
  getAllConversations,
} = require('../controllers/conversation.controller');

const router = Router();

router.get('/', getAllConversations);

module.exports = router;
