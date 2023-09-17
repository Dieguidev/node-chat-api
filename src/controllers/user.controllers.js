const UserServices = require('../services/user.services');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserServices.getById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await UserServices.getByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findYUser = await UserServices.getById(id);
    const result = await UserServices.updateUser(id, req.body);
    if (result) {
      res.status(200).json(findYUser);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserById, getAllUsers, getUserByEmail, updateUser };
