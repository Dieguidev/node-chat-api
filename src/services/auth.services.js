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
    const findUser = await Users.findOne({ email });

    if (!findUser) {
      return { mesage: 'user not found' };
    }

    if (bcrypt.compareSync(password, findUser.password)) {
      const token = jwt.sign(
        {
          id: findUser.id,
          isAdmin: findUser.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h', algorithm: 'HS256' },
      );

      return token;
    } else {
      return { mesage: 'password is incorrect' };
    }
  }
}

module.exports = AuthServices;
