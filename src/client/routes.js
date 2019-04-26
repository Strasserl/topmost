import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import TeacherHome from './components/teacher-homepage';
import TeacherInputForm from './components/teacher-input-form';
// import PropTypes from 'prop-types';

// import { me } from './store';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Switch>
          <Route path="/" component={TeacherHome} />
          <Route path="/teacher-input-form" component={TeacherInputForm} />
        </Switch>
      </Switch>
    );
  }
}

export default withRouter(Routes);
