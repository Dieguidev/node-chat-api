const Users = require('../db/model/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices {
  static async register(user) {
    const result = await Users.create(user);
    delete result.dataValues.password;
    return result;
  }

  static async login(credentials) {
    const { email, password } = credentials;
    const user = await Users.findOne({ where: { email } });

    if (user) {
      const isValid = bcrypt.compareSync(password, user.password);
      return isValid ? { isValid, user } : { isValid };
    }
    return { isValid: false };
  }

  static genToken(data) {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: '10m',
      algorithm: 'HS512',
    });
    return token;
  }
}

module.exports = AuthServices;
