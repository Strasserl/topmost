import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAddTeacherMsg } from '../reducers/campusReducer';

class TeacherInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
      agenda: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      greeting: '',
      agenda: '',
    });
    this.props.add(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>
            Enter **Optional** Whole Class Greeting to your Students:
            <input
              type="text"
              name="greeting"
              value={this.state.greeting}
              onChange={this.handleChange}
            />
          </h2>
        </div>
        <br />
        <div>
          <h2>
            Enter **Optional** Daily Agenda:
            <input
              type="text"
              name="agenda"
              value={this.state.agenda}
              onChange={this.handleChange}
            />
          </h2>
        </div>
        <br />
        <button type="submit">Submit Greeting and Agenda</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: obj => {
      dispatch(fetchAddTeacherMsg(obj));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TeacherInputForm);
