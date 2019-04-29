import React, { PureComponent } from 'react';

import Loading from './loading';
import {
  BarChart,
  Bar,
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

class SingleStudentBar extends PureComponent {
  render() {
    const { student, loading, studentAnswers } = this.props;

    const data = studentAnswers.map(answer => {
      return {
        id: answer.studentId,
        name: student.firstName,
        mood: quantity[answer.mood],
        date: answer.date.slice(5),
      };
    });

    return loading ? (
      <Loading />
    ) : (
      <div>
        <h2>Data from 4/22/19 - Today</h2>
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
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mood" fill="#8884d8" onClick={this.handleBarClick} />
        </BarChart>
        <p>
          BAR CHART KEY: 2000: excellent, 1500: great, 1000: fine, 500: bad,
          100: terrible
        </p>
      </div>
    );
  }
}

export default SingleStudentBar;
