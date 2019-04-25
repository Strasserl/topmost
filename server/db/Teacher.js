const Sequelize = require('sequelize');
const db = require('./database');

const Teacher = db.define('teacher', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?cs=srgb&dl=apple-blur-book-stack-256520.jpg&fm=jpg',
  },
});

module.exports = Teacher;
