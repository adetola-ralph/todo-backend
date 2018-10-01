const dotenv = require('dotenv');

dotenv.config({
  silent: true,
});

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_DB_USERNAME || 'postgres',
    password: process.env.TEST_DB_PASSWORD || null,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    dialect: 'postgres',
    logging: false,
  },
  staging: {
    use_env_variable: 'DATABASE_URL'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  },
};
