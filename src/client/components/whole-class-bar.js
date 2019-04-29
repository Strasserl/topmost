import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchAnswers } from '../store/studentAnswers';

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
  }

  componentDidMount() {
    this.props.fetchAnswers();
  }

  render() {
    const { answers, answersLoading } = this.props;

    const today = answers.filter(answer => {
      return answer.date === '2019-04-30';
    });

    const data = today.map(answer => {
      return { name: answer.student.firstName, mood: quantity[answer.mood] };
    });

    console.log('data', data);

    return answersLoading ? (
      <Loading />
    ) : (
      <BarChart
        width={500}
        height={300}
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
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mood" fill="#8884d8" />
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
