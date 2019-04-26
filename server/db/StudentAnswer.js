const Sequelize = require('sequelize');
const db = require('./database');

const StudentAnswer = db.define('studentAnswer', {
  mood: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = StudentAnswer;
