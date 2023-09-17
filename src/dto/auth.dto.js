const Joi = require('joi');

const id = Joi.number().integer();

const email = Joi.string().email();

const firstName = Joi.string().min(1).max(50);
const lastName = Joi.string().min(1).max(50);
const username = Joi.string().min(1).max(50);
const password = Joi.string();
const profileImage = Joi.string().uri();
const phone = Joi.string();

const registerDTO = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  username: username.required(),
  email: email.required(),
  password: password.required(),
  phone,
  profileImage,
})

module.exports = { registerDTO }
