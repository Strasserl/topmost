import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import TeacherHome from './components/teacher-homepage';
import TeacherInputForm from './components/teacher-input-form';
import StudentHome from './components/student-homepage';
import StudentInputForm from './components/student-input-form';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TeacherHome} />
        <Route exact path="/teacher-input-form" component={TeacherInputForm} />
        <Route exact path="/student-home" component={StudentHome} />
        <Route exact path="/student-input-form" component={StudentInputForm} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
