const Sequelize = require('sequelize');
const db = require('./database');
const moment = require('Moment');

const StudentAnswer = db.define('studentAnswer', {
  mood: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  date: {
    type: Sequelize.STRING,
  },
});

module.exports = StudentAnswer;
