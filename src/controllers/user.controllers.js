const UserServices = require('../services/user.services');

const getAllUsers = async (req, res) => {
  try {
    const users = await UserServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: 'something wrong' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserServices.getById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'something wrong' });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;
    const user = await UserServices.getByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'something wrong' });
  }
};



module.exports = { getUserById, getAllUsers, getUserByEmail };
