const db = require('./database');
const Teacher = require('./Teacher');
const Student = require('./Student');
const StudentAnswer = require('./StudentAnswer');
const TeacherMessage = require('./TeacherMessage');

Student.belongsTo(Teacher);
Teacher.hasMany(Student, { primaryKey: 'primaryKey' });

StudentAnswer.belongsTo(Student);
Student.hasMany(StudentAnswer);

TeacherMessage.belongsTo(Teacher);
Teacher.hasMany(TeacherMessage);

Student.module.exports = {
  db,
  Teacher,
  Student,
  StudentAnswer,
  TeacherMessage,
};
