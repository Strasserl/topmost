import React, { PureComponent } from 'react';
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

const data = [
  {
    name: 'Fletch',
    mood: 10000,
  },
  {
    name: 'Nora',
    mood: 7500,
  },
  {
    name: 'Meg',
    mood: 5000,
  },
  {
    name: 'Skye',
    mood: 2500,
  },
  {
    name: 'Amalee',
    mood: 1000,
  },
  {
    name: 'John',
    mood: 2500,
  },
  {
    name: 'Caelan',
    mood: 5000,
  },
];

export default class WholeClasssBar extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
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
