'use strict';

const base64 = require('base-64');
const { users } = require('../../models');

module.exports = async (req, res, next) => {
  if(!req.headers.authorization) {
    next('Invalid Login at basic');
  }

  const basic = req.headers.authorization.split(' ').pop();
  const [username, password] = base64.decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(username, password);
    next();
  } catch (error) {
    next('Invalid Login at basic');
  }
};

