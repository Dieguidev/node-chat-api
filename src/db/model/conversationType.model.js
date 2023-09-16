const db = require('../../utils/database');

const { DataTypes, Sequelize } = require('sequelize');

const ConversationTypes = db.define('conversation_types', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    autoIncrementIdentity: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'single',
    validate: {
      isIn: [['single', 'group']],
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
});

module.exports = ConversationTypes;
