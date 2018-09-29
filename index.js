const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const logger = require('./services/logger');

dotenv.config({
  silent: true,
});

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// error handler
app.use((error, req, res, next) => {
  // log if it is a server error
  if (error.isServer) {
    logger.error(error);
  }

  return res.status(error.output.statusCode).json(error.output.payload);
});

app.listen(port, () => {
  logger.info(`Server listening on ${port}`);
});

module.exports = app;
