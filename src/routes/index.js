const express = require('express');
const router = express.Router();
const usersRouter = require('./user.routes');
const authRouter = require('./auth.routes');

const routerApi = (app) => {
  app.use('/api/v1', router);

  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
