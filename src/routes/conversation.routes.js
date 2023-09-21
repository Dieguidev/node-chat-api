const { Router } = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  deleteConversation,
} = require('../controllers/conversation.controller');
const {
  getByIdDTO,
  createConversationDTO,
  updateUserDTO,
} = require('../dto/conversations.dto');

const router = Router();

router.get('/', getAllConversations);
router.get('/:id', validatorHandler(getByIdDTO, 'params'), getConversationById);
router.post(
  '/',
  validatorHandler(createConversationDTO, 'body'),
  createConversation,
);
router.put(
  '/:id',
  validatorHandler(updateUserDTO, 'body'),
  validatorHandler(getByIdDTO, 'params'),
  updateConversation,
);

router.delete(
  '/:id',
  validatorHandler(getByIdDTO, 'params'),
  deleteConversation,
);

module.exports = router;
