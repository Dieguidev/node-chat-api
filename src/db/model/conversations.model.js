const db = require('../../utils/database');

const { DataTypes, Sequelize } = require('sequelize');

const Conversations = db.define('conversations', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    autoIncrementIdentity: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageConversation: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'image_conversation',
    defaultValue: 'https://i.imgur.com/KXkK0XA.png',
    validate: {
      isUrl: true,
    },
  },
  createdByUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'created_by_user_id',
  },
  typeConversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'type_conversation_id',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Conversations;
