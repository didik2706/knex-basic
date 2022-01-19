require('dotenv').config();
const config = require('../knexfile');


module.exports = process.env.NODE_ENV === "development"
                ? require('knex')(config.development)
                : require('knex')(config.production)