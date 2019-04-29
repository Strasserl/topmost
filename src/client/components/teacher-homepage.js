import React from 'react';
import TeacherInputForm from './teacher-input-form';
import WholeClassPie from './whole-class-pie';
import { Link } from 'react-router-dom';
import WholeClassBar from './whole-class-bar';

export const TeacherHome = props => {
  return (
    <div>
      <h4>Good Morning Mr. Ranscomb!!</h4>
      <TeacherInputForm />
      <Link to="/class-bar">
        <h2>Today's Data:</h2>
      </Link>
      <WholeClassPie />
    </div>
  );
};

export default TeacherHome;
