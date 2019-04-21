import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Visits: 40, Orders: 14 },
  { name: 'Tue', Visits: 67, Orders: 13 },
  { name: 'Wed', Visits: 99, Orders: 24 },
  { name: 'Thu', Visits: 157, Orders: 67 },
  { name: 'Fri', Visits: 225, Orders: 99 },
  { name: 'Sat', Visits: 247, Orders: 106 },
  { name: 'Sun', Visits: 303, Orders: 151 },
];

function SimpleLineChart() {
  return (
    <ResponsiveContainer width="90%" height={500}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
