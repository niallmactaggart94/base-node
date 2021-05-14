
/**
 * @global
 * @name process.env.NODE_ENV
 * @description Environment that the application is running in,
 * defaults to "development" if not set within the environment
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const https = require('https');
const config = require('./config/environment');
const app = express();
const server = https.createServer(config.server, app);

// configure the routes to be used by the application
require('./routes')(app);

/**
 * @type function
 * @description function to start the server
 */
const startServer = function () {
  const port = config.port + parseInt(process.env.PORT_OFFSET || '0', 10);

  app.app = server.listen(port, config.ip, () => {
    console.log('Server listening on %d, in %s mode', port, app.get('env'));
  });
};

setImmediate(startServer);

// Expose app
module.exports = app;
