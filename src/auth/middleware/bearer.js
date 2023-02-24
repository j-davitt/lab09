'use strict';

const { users } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    if(!req.headers.authorization) {
      next('Invalid Login Error at bearer');
    }

    const token = req.headers.authorization.split(' ')[1];
    const validUser = await users.authenticateToken(token);
    req.user = validUser;
    req.token = validUser.token;
    req.body.username = validUser.token;
    next();

  } catch (error) {
    next('Invalid Login Error at bearer');
  }
};
