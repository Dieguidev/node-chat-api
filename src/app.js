const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./db/model/init.models');
const routerApi = require('./routes');
const { logErrors, ormErrorHandler, boomErrorHandler, errorHandler } = require('./middlewares/error.handler');



const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModels();

db.authenticate()
  .then(() => console.log('Bd autenticada'))
  .catch(error => console.log(error));

// db.sync({ force: true })
//   .then(() => console.log('bd sincronnizada'))
//   .catch(error => console.log(error));


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my server' })
})

routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;
