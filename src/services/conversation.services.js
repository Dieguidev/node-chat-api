const Conversations = require('../db/model/conversations.model');

class ConversationServices {
  static async getAllConversations() {
    const result = await Conversations.findAll();
    return result;
  }
}

module.exports = ConversationServices;
