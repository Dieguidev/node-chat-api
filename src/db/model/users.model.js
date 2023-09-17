const db = require('../../utils/database');

const { DataTypes, Sequelize } = require('sequelize');

const bcrypt = require('bcrypt');

const Users = db.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      autoIncrementIdentity: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      field: 'first_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        len: [1,50],
      }
    },
    lastName: {
      field: 'last_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        len: [1,50],
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len: [1,50],
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate:{
        isEmail: true,
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    profileImage: {
      field: 'profile_image',
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      field: 'is_admin',
      defaultValue: false,
    },
    recoveryToken: {
      field: 'recovery_token',
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW
    }
  },
  {
    hooks: {
      beforeCreate: (user) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 10);
        user.password = hash;
      },
    },
  },
);

module.exports = Users;
