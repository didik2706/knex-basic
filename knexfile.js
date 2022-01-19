require('dotenv').config();
const {
  DB_HOST,
  DB_PORT,
  DB_PASS,
  DB_USER,
  DB_NAME,
} = process.env;
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME
    }
  }

};
