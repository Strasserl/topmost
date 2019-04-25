import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { TeacherHome } from './components';
// import { me } from './store';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    // const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* {isLoggedIn && ( */}
        <Switch>
          <Route path="/teacher-home" component={TeacherHome} />
        </Switch>
        {/* )} */}
      </Switch>
    );
  }
}

// const mapState = state => {
//   return {
//     isTeacherLoggedIn: !!state.teacher.id,
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

// export default withRouter(
//   connect(
//     mapState,
//     mapDispatch
//   )(Routes)
// );

export default Routes;
