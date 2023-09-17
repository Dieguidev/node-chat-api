
const db = require('../../utils/database');
const initModels = require('./init-models');

initModels(db);

db.authenticate()
  .then(() => console.log('Bd autenticada'))
  .catch((error) => console.log(error));

// db.sync({ force: true })
//   .then(() => console.log('bd sincronnizada'))
//   .catch(error => console.log(error));

// module.exports = models;
