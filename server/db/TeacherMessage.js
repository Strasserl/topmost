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
  timestamp: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = TeacherMessage;
