const Joi = require('joi');

const id = Joi.number().integer();

const email = Joi.string().email();

const firstName = Joi.string();
const lastName = Joi.string();
const username = Joi.string();
const profileImage = Joi.string().uri();

const getUserByEmailDTO = Joi.object({
  email: email.required(),
})

const getUserByIdDTO = Joi.object({
  id: id.required(),
})

const updateUserDTO = Joi.object({
  firstName,
  lastName,
  username,
  profileImage
})

const deleteUserDTO = Joi.object({
  id: id.required(),
})

module.exports = { getUserByEmailDTO, getUserByIdDTO, updateUserDTO, deleteUserDTO }
