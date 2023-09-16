const db = require('../../utils/database');

const { DataTypes, Sequelize } = require('sequelize');

const Messages = db.define('messages', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senderUserId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'sender_user_id',
  },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'conversation_id',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Messages;
