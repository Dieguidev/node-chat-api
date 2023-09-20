const express = require('express');
const router = express.Router();
const usersRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const conversationRouter = require('./conversation.routes');

const routerApi = (app) => {
  app.use('/api/v1', router);

  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/conversations', conversationRouter);
};

module.exports = routerApi;
