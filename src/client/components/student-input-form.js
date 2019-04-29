import React, { Component } from 'react';
// import { connect } from 'react-redux';

class StudentInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: '',
      comment: '',
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange(changeEvent) {
    this.setState({
      mood: changeEvent.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      mood: '',
      comment: '',
    });
    // this.props.add(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleSubmit}>
              <h2>How are you this morning?</h2>
              <div className="answer">
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="excellent"
                      value="excellent"
                      checked={this.state.mood === 'excellent'}
                      onChange={this.handleOptionChange}
                    />
                    Excellent
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="mood"
                      value="great"
                      checked={this.state.mood === 'great'}
                      onChange={this.handleOptionChange}
                    />
                    Great
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="mood"
                      value="fine"
                      checked={this.state.mood === 'fine'}
                      onChange={this.handleOptionChange}
                    />
                    Fine
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="mood"
                      value="bad"
                      checked={this.state.mood === 'bad'}
                      onChange={this.handleOptionChange}
                    />
                    Bad
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="mood"
                      value="terrible"
                      checked={this.state.mood === 'terrible'}
                      onChange={this.handleOptionChange}
                    />
                    Terrible
                  </label>
                </div>
                <div />
                <h2>
                  Is there anything you would like to share with your teacher?
                </h2>
                <textarea
                  rows="8"
                  cols="100"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     add: obj => {
//       dispatch(fetchAddCampus(obj));
//     },
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(StudentInputForm);

export default StudentInputForm;
