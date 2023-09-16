const db = require('../../utils/database');

const { DataTypes, Sequelize } = require('sequelize');

const bcrypt = require('bcrypt');

const Users = db.define(
  'users',
  {
    id: {
      type: DataTypes.UUID,
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
      allowNull:false,
    },
    profileImage: {
      field: 'profile_image',
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
    recoveryToken: {
      field: 'recovery_token',
      allowNull: true,
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
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 10);
        user.password = hash;
      },
    },
  },
);

module.exports = Users;
