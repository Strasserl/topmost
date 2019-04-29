import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchAnswers } from '../store/studentAnswers';
import Loading from './loading';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  mood,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y - 20}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {mood}
      </text>
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
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

    const firstData = today.map(answer => {
      return { name: answer.student.firstName, mood: answer.mood };
    });

    const secondData = firstData.reduce((acc, student) => {
      return {
        ...acc,
        [student.mood]: acc[student.mood] ? acc[student.mood] + 1 : 1,
      };
    }, {});

    const data = Object.entries(secondData).map(([key, val]) => {
      return { mood: key, count: val };
    });

    return loading ? (
      <Loading />
    ) : (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="count"
              nameKey="mood"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
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
