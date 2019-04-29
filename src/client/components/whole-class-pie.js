import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { fetchAnswers } from '../store/studentAnswers';
import Loading from './loading';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class WholeClasssPie extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAnswers();
  }

  render() {
    const answers = this.props.answers;
    const loading = answers.loading;

    const today = answers.filter(answer => {
      return answer.date === '2019-04-30';
    });

    const data = today.map(answer => {
      return answer.mood;
    });

    return loading ? (
      <Loading />
    ) : (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

const mapState = state => {
  return {
    loading: state.answerReducer.answersLoading,
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
)(WholeClasssPie);
