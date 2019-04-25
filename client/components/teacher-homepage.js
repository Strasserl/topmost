import React from 'react';
import { connect } from 'react-redux';

export const TeacherHome = props => {
  const { email } = props;

  return props.email ? (
    <div id="welcome-user">
      <h4>Good Morning, {email}</h4>
    </div>
  ) : (
    <div>Good Morning!!</div>
  );
};

const mapState = state => {
  return {
    email: state.user.email,
  };
};

export default connect(mapState)(TeacherHome);
