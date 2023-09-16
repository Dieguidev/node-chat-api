const ConversationTypes = require('./conversationType.model');
const Messages = require('./messages.model');
const Users = require('./users.model');

const initModels = () => {
  Users, Messages, ConversationTypes;
};

module.exports = initModels;

