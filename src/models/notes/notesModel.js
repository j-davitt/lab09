'use strict';

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'secretstring';

const notesModel = (sequelize, DataTypes) => {
  const model = sequelize.define('Notes', {
    username: { type: DataTypes.STRING, required: true },
    note: { type: DataTypes.STRING, required: true },
  });

  model.afterValidate(async (data) => {
    let parsedToken = await jwt.verify(data.dataValues.username, SECRET);
    data.username = parsedToken.username;
  });

  return model;
};

module.exports = notesModel;
