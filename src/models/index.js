'use strict';


const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('../auth/models/users');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory:'
  : process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);

module.exports = {
  sequelizeDB,
  users: userModel(sequelizeDB, DataTypes),
};
