'use strict';

const express = require('express');
const cors = require('cors');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const routes = require('./routes');
const authRoutes = require('./auth/routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(authRoutes);
app.use(routes);


app.use(notFound);
app.use(errorHandler);

module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
