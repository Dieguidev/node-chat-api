const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(50);
const imageConversation = Joi.string().uri();
const createdByUserId = Joi.number().integer();
const typeConversationId = Joi.number().integer();

const createConversationDTO = Joi.object({
  title: title.required(),
  imageConversation,
  createdByUserId: createdByUserId.required(),
  typeConversationId: typeConversationId.required(),
});

const getByIdDTO = Joi.object({
  id: id.required(),
});

const updateUserDTO = Joi.object({
  title,
  imageConversation,
});

module.exports = { createConversationDTO, getByIdDTO, updateUserDTO };
