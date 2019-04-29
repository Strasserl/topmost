import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import TeacherHome from './components/teacher-homepage';
import TeacherInputForm from './components/teacher-input-form';
import StudentHome from './components/student-homepage';
import StudentInputForm from './components/student-input-form';
import WholeClassBar from './components/whole-class-bar';
import WholeClassPie from './components/whole-class-pie';
import Loading from './components/loading';
import SingleStudent from './components/single-student-data';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TeacherHome} />
        <Route exact path="/teacher-input-form" component={TeacherInputForm} />
        <Route exact path="/student-home" component={StudentHome} />
        <Route exact path="/student-input-form" component={StudentInputForm} />
        <Route exact path="/class-bar" component={WholeClassBar} />
        <Route exact path="/class-pie" component={WholeClassPie} />
        <Route exact path="/loading" component={Loading} />
        <Route path="/students/:id" component={SingleStudent} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
