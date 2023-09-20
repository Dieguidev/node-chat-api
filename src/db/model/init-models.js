const ConversationTypes = require('./conversationType.model');
const Conversations = require('./conversations.model');
const Messages = require('./messages.model');
const Participants = require('./participants.model');
const Users = require('./users.model');

const initModels = () => {
  Users.hasMany(Messages, { as: 'messages', foreignKey: 'senderUserId' });
  Messages.belongsTo(Users, { as: 'senderUser', foreignKey: 'senderUserId' });
  Users.hasMany(Conversations, { as: 'conversations', foreignKey: 'createdByUserId' });
  Conversations.belongsTo(Users, { as: 'createdByUser', foreignKey: 'createdByUserId' });
  Conversations.hasMany(Messages, { as: 'messages', foreignKey: 'conversationId' });
  Messages.belongsTo(Conversations, { as: 'conversation', foreignKey: 'conversationId' });
  Conversations.hasMany(Participants, { as: 'participants', foreignKey: 'conversationId' });
  Participants.belongsTo(Conversations, { as: 'conversation', foreignKey: 'conversationId' });
  Users.hasMany(Participants, { as: 'participants', foreignKey: 'userId' });
  Participants.belongsTo(Users, {as: 'user', foreignKey: 'userId'});
  ConversationTypes.hasMany(Conversations, { as: 'conversations', foreignKey: 'conversationTypeId' });
  Conversations.belongsTo(ConversationTypes, { as: 'conversationType', foreignKey: 'conversationTypeId' });
}

module.exports = initModels;
