const models = require('../model');
const db = require('../../utils/database');
const Users = require('../model/users.model');

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'hashedpassword1',
    phone: '1234567890',
    profileImage: 'https://example.com/johndoe.jpg',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    username: 'janesmith',
    email: 'janesmith@example.com',
    password: 'hashedpassword2',
    phone: '9876543210',
    profileImage: 'https://example.com/janesmith.jpg',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    username: 'alicejohnson',
    email: 'alicejohnson@example.com',
    password: 'hashedpassword3',
    phone: '5555555555',
    profileImage: 'https://example.com/alicejohnson.jpg',
  },
  {
    firstName: 'Bob',
    lastName: 'Brown',
    username: 'bobbrown',
    email: 'bobbrown@example.com',
    password: 'hashedpassword4',
    phone: '1111111111',
    profileImage: 'https://example.com/bobbrown.jpg',
  },
  {
    firstName: 'Ella',
    lastName: 'Davis',
    username: 'elladavis',
    email: 'elladavis@example.com',
    password: 'hashedpassword5',
    phone: '9999999999',
    profileImage: 'https://example.com/elladavis.jpg',
  },
  {
    firstName: 'Michael',
    lastName: 'Lee',
    username: 'michaellee',
    email: 'michaellee@example.com',
    password: 'hashedpassword6',
    phone: '4444444444',
    profileImage: 'https://example.com/michaellee.jpg',
  },
  {
    firstName: 'Sophia',
    lastName: 'Wang',
    username: 'sophiawang',
    email: 'sophiawang@example.com',
    password: 'hashedpassword7',
    phone: '7777777777',
    profileImage: 'https://example.com/sophiawang.jpg',
  },
  {
    firstName: 'William',
    lastName: 'Garcia',
    username: 'williamgarcia',
    email: 'williamgarcia@example.com',
    password: 'hashedpassword8',
    phone: '8888888888',
    profileImage: 'https://example.com/williamgarcia.jpg',
  },
  {
    firstName: 'Olivia',
    lastName: 'Martinez',
    username: 'oliviamartinez',
    email: 'oliviamartinez@example.com',
    password: 'hashedpassword9',
    phone: '2222222222',
    profileImage: 'https://example.com/oliviamartinez.jpg',
  },
  {
    firstName: 'James',
    lastName: 'Lopez',
    username: 'jameslopez',
    email: 'jameslopez@example.com',
    password: 'hashedpassword10',
    phone: '6666666666',
    profileImage: 'https://example.com/jameslopez.jpg',
  },
  {
    firstName: 'Diego',
    lastName: 'Garay',
    username: 'dieguidev',
    email: 'diegogaray@example.com',
    password: '1234',
    phone: '3666666666',
    profileImage: 'https://example.com/jameslopez.jpg',
    isAdmin: true,
  },
]

db.sync({ force: true })
  .then(() => {
    console.log('sembrando');
    users.forEach(user => Users.create(user));
  })
