const ConversationServices = require('../services/conversation.services');

const getAllConversations = async (req, res, next) => {
  try {
    const conversations = await ConversationServices.getAllConversations();
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllConversations };
