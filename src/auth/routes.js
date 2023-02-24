'use strict';

const express = require('express');
const userRouter = express.Router();

const { users } = require('../models');

const acl = require('./middleware/acl');
const basicAuth = require('./middleware/basic');
// const bearerAuth = require('./middleware/bearer');

userRouter.post('/signup', async (req, res, next) => {
  try {
    let user = await users.create(req.body);
    const output = {
      user: user,
      token: user.token,
    };
    res.status(201).json(output);
  } catch (error) {
    next(error);
  }

});

userRouter.post('/signin', basicAuth, (req, res, next) => {
  try {
    const user = {
      user: req.user,
      token: req.user.token,
    };
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }

});

userRouter.get('/users', acl, async (req, res, next) => {
  try {
    const allUsers = await users.findAll({});
    const list = allUsers.map(user => user.username);
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }

});


module.exports = userRouter;
