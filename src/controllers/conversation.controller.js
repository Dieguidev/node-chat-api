const ConversationServices = require('../services/conversation.services');
const UserServices = require('../services/user.services');

const getAllConversations = async (req, res, next) => {
  try {
    const conversations = await ConversationServices.getAllConversations();
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};

const getConversationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conversation = await ConversationServices.getConversationById(id);
    res.json(conversation);
  } catch (error) {
    next(error);
  }
};

const createConversation = async (req, res, next) => {
  try {
    const { createdByUserId } = req.body;
    await UserServices.getById(createdByUserId);
    const conversation = await ConversationServices.createConversation(
      req.body,
    );
    res.json(conversation);
  } catch (error) {
    next(error);
  }
};

const updateConversation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conversation = await ConversationServices.updateConversation(
      id,
      req.body,
    );
    res.json(conversation);
  } catch (error) {
    next(error);
  }
};

const deleteConversation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ConversationServices.getConversationById(id);
    await ConversationServices.deleteConversation(id);
    res.json({ message: 'deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  deleteConversation,
};
