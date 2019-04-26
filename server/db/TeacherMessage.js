const Sequelize = require('sequelize');
const db = require('./database');

const TeacherMessage = db.define('teacherMessage', {
  greeting: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  agenda: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = TeacherMessage;
