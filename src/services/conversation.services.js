const boom = require('@hapi/boom');

const Conversations = require('../db/model/conversations.model');

class ConversationServices {
  static async getAllConversations() {
    const result = await Conversations.findAll();
    return result;
  }

  static async getConversationById(id) {
    const result = await Conversations.findByPk(id);
    if (!result) {
      throw boom.notFound(`there is no conversation with id ${id}`);
    }
    return result;
  }
  static async createConversation(conversation) {
    const result = await Conversations.create(conversation);
    return result;
  }
  static async updateConversation(id, conversation) {
    const result = await Conversations.update(conversation, { where: { id } });
    return result;
  }
  static async deleteConversation(id) {
    const result = await Conversations.destroy({ where: { id } });
    return result;
  }
}

module.exports = ConversationServices;
