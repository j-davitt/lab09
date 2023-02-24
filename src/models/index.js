'use strict';


const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('../auth/models/users');
const notesModel = require('./notes/notesModel');
const songModel = require('./favSong/songModel');

const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory:'
  : process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);
const notes = notesModel(sequelizeDB, DataTypes);
const song = songModel(sequelizeDB, DataTypes);

module.exports = {
  sequelizeDB,
  users: userModel(sequelizeDB, DataTypes),
  notes: new Collection(notes),
  song: new Collection(song),
};
