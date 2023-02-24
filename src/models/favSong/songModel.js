'use strict';

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'secretstring';

const songModel = (sequelize, DataTypes) => {
  const model = sequelize.define('Songs', {
    username: { type: DataTypes.STRING, required: true },
    songName: { type: DataTypes.STRING, required: true },
  });

  model.afterValidate(async (data) => {
    let parsedToken = await jwt.verify(data.dataValues.username, SECRET);
    data.username = parsedToken.username;
  });

  return model;
};

module.exports = songModel;
