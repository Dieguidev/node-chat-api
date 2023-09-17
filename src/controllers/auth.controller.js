const boom = require('@hapi/boom');
const AuthServices = require('../services/auth.services');

// const transporter = require('../utils/mailer');

const register = async (req, res) => {
  try {
    const result = await AuthServices.register(req.body);
    res.status(201).json(result);
    // if (result) {
    //   res.status(201).json({ message: 'user created' });
    //   await transporter.sendMail({
    //     to: result.email,
    //     from: 'diegogaraycullas@gmail.com',
    //     subject: 'Email confirmation',
    //     html: "<h1>Bienvenido a la mejor app de chat creada por mi</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>"
    //   });
    // } else {
    //   res.status(400).json({ message: 'something wrong' });
    // }
  } catch (error) {
    res.status(400).json({ message: 'existing username or email' });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await AuthServices.login({ email, password });

    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { id, username, email };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      throw boom.notFound('email o password incorrect');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
