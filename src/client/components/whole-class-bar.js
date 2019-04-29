import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchAnswers } from '../store/studentAnswers';
import { Redirect } from 'react-router';

import Loading from './loading';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const quantity = {
  excellent: 2000,
  great: 1500,
  fine: 1000,
  bad: 500,
  terrible: 100,
};

class WholeClasssBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
    };
  }

  componentDidMount() {
    this.props.fetchAnswers();
  }

  handleBarClick = data => {
    this.setState({ redirectTo: data.id });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect push to={`/students/${this.state.redirectTo}`} />;
    }

    const { answers, answersLoading } = this.props;

    const today = answers.filter(answer => {
      return answer.date === '2019-04-30';
    });

    const data = today.map(answer => {
      return {
        id: answer.studentId,
        name: answer.student.firstName,
        mood: quantity[answer.mood],
      };
    });

    return answersLoading ? (
      <Loading />
    ) : (
      <BarChart
        width={600}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          label={{
            value: 'terrible <----> excellent',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="mood" fill="#8884d8" onClick={this.handleBarClick} />
      </BarChart>
    );
  }
}

const mapState = state => {
  return {
    answersLoading: state.answerReducer.answersLoading,
    answers: state.answerReducer.all,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnswers: () => dispatch(fetchAnswers()),
  };
};

export default connect(
  mapState,
  mapDispatchToProps
)(WholeClasssBar);
