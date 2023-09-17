const boom = require('@hapi/boom');

const Users = require('../db/model/users.model');

class UserServices {
  static async getById(id) {
    const result = await Users.findByPk(id);
    if (!result) {
      throw boom.notFound(`there is no user with id ${id}`);
    }
    return result;
  }

  static async getByEmail(email) {
    const result = await Users.findOne({ where: { email } });
    if (!result) {
      throw boom.notFound(`there is no user with email ${email}`);
    }
    return result;
  }

  static async getAllUsers() {
    const result = await Users.findAll();
    return result;
  }

  static async getUserByUsername(username) {
    const result = await Users.findOne({ where: { username } });
    return result;
  }

  static async updateUser(id, data) {
    const result = await Users.update(data, { where: { id } });
    return result;
  }

  static async deleteUser(id) {
    const result = await Users.destroy({ where: { id } });
    return result;
  }
}

module.exports = UserServices;
