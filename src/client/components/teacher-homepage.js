import React from 'react';
import TeacherInputForm from './teacher-input-form';
import WholeClassBar from './whole-class-bar';

// import { connect } from 'react-redux';

export const TeacherHome = props => {
  // const { email } = props;

  return (
    <div>
      <h4>Good Morning!!</h4>
      <TeacherInputForm />
      <h2>Today's Data:</h2>
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
