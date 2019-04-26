import React from 'react';
import TeacherInputForm from './teacher-input-form';
import WholeClassBar from './whole-class-bar';

// import { connect } from 'react-redux';

export const TeacherHome = props => {
  // const { email } = props;

  return (
    <div>
      Good Morning!!
      <TeacherInputForm />
      <br />
      <h1>Today's Data:</h1>
      <WholeClassBar />
    </div>
  );
  // props.email ? (
  //   <div id="welcome-user">
  //     <h4>Good Morning, {email}</h4>
  //   </div>
  // ) :
};

// const mapState = state => {
//   return {
//     email: state.user.email,
//   };
// };

export default TeacherHome;

// export default connect(mapState)(TeacherHome);
