const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');

// const authRoutes = require('./routes/auth.routes');
// const transporter = require('./utils/mailer');


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

db.authenticate()
  .then(() => console.log('Bd autenticada'))
  .catch(error => console.log(error));
db.sync({ force: true })
  .then(() => console.log('bd sincronnizada'))
  .catch(error => console.log(error));


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my server' })
})

// app.use('/api/v1/auth', authRoutes)

module.exports = app;
