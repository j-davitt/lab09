'use strict';

require('dotenv').config();
const { sequelizeDB } = require('./src/models');
const app = require('./src/server');
const PORT = process.env.PORT || 3001;

sequelizeDB.sync().then(() => {
  app.start(PORT);
});

