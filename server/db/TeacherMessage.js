const Sequelize = require('sequelize');
const db = require('./database');

const TeacherMessage = db.define('teacherMessage', {
  greeting: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  agenda: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  date: {
    type: Sequelize.STRING,
  },
});

module.exports = TeacherMessage;
