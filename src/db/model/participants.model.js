const db = require('../../utils/database');

const { DataTypes, Sequelize } = require('sequelize');

const Participants = db.define('participants', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    autoIncrementIdentity: true,
    allowNull: false,
    primaryKey: true,
  },
  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'conversation_id',
  },
  participantUserId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'participant_user_id',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
})

module.exports = Participants;
