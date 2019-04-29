import React from 'react';
import TeacherInputForm from './teacher-input-form';
import WholeClassBar from './whole-class-bar';

export const TeacherHome = props => {
  return (
    <div>
      <h4>Good Morning Mr. Ranscomb!!</h4>
      <TeacherInputForm />
      <h2>Today's Data:</h2>
      <WholeClassBar />
    </div>
  );
};

export default TeacherHome;
