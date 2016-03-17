require('dotenv').load();

module.exports = {

  development: {
    client: 'mongodb',
    connection : 'mongodb://localhost/boards_development'
  },

  production: {
    client: 'mongodb',
    connection: process.env.MONGOLAB_URI
  }
};
