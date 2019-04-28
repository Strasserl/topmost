import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchAddTeacherMsg } from '../reducers';

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
          <h3>**Optional** Enter Whole Class Greeting to your Students:</h3>
          <textarea
            rows="2"
            cols="100"
            name="greeting"
            value={this.state.greeting}
            onChange={this.handleChange}
            placeholder="Good Morning, class!"
          />
        </div>
        <div>
          <h3>**Optional** Enter Daily Agenda: </h3>
          <textarea
            rows="4"
            cols="100"
            name="agenda"
            value={this.state.agenda}
            onChange={this.handleChange}
            placeholder="9:00am-9:05am Bell Ringer and Attendance&#10;9:05-9:25am Reader's Workshop and Small Group Instruction&#10;9:25-9:55am Whole Class Reading Lesson&#10;9:55-10:00am Exit Ticket"
          />
        </div>
        <br />
        <button type="submit">Submit Greeting and Agenda</button>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     add: obj => {
//       // dispatch(fetchAddTeacherMsg(obj));
//     },
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(TeacherInputForm);

export default TeacherInputForm;
