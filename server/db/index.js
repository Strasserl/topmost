const db = require('./database');
const Teacher = require('./Teacher');
const Student = require('./Student');

Student.belongsTo(Teacher);
Teacher.hasMany(Student, { primaryKey: 'primaryKey' });

module.exports = {
  db,
  Teacher,
  Student,
};
