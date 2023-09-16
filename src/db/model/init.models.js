const Messages = require('./messages.model');
const Users = require('./users.model');

const initModels = () => {
  Users, Messages;
};

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
