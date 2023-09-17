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
    if (!email) {
      return res.status(400).json({
        error: 'Missing data',
        message: 'Not email provided',
      });
    }
    if (!password) {
      return res.status(400).json({
        error: 'Missing data',
        message: 'Not password provided',
      });
    }
    const result = await AuthServices.login({ email, password }); //credentials

    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
      result.user.token = token;
      res.json(result.user);
    } else {
      res.jsopn(400).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
