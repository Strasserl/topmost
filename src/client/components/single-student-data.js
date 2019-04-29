import React from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from '../store/student';
import Loading from './loading';
import { Table, Container } from 'reactstrap';

class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStudent(id);
  }

  render() {
    const student = this.props.student;
    const loading = student.loading;
    const studentAnswers = student.studentAnswers;

    return loading || studentAnswers === undefined ? (
      <Loading />
    ) : (
      <div>
        <h1>
          Student: {student.firstName} {student.lastName}
        </h1>
        <img className="studentImage" src={student.imageUrl} />
        <h3> Email: {student.email}</h3>
        <h3> Reading Level: {student.readingLevel}</h3>
        <div>
          <Container>
            <h2>Student Messages:</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Mood</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {studentAnswers.map(message => {
                  return (
                    <tr key={message.id}>
                      <td>{message.date}</td>
                      <td>{message.mood}</td>
                      <td>{message.comment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    loading: state.student.loading,
    student: state.student.selected,
    studentAnswers: state.student.studentAnswers,
  };
};

const mapDispatch = dispatch => ({
  fetchStudent: id => dispatch(fetchStudent(id)),
});

export default connect(
  mapState,
  mapDispatch
)(SingleStudent);
