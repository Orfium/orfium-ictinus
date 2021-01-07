import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
const data = [
  { name: 'Orfium', value: 600000 },
  { name: 'UMG', value: 230000 },
  { name: 'Unknown Owners', value: 138000 },
  { name: 'SME', value: 60908 },
  { name: 'AdRev (3d party)', value: 40800 },
  { name: 'Rock Mobile Corp.', value: 30800 },
  { name: 'UMPG Publishing', value: 7300 },
  { name: 'Karya Anak Haki', value: 4300 },
  { name: 'Adshare (3d party)', value: 3300 },
  { name: 'Other', value: 14300 },
];

// const CustomYAxisTick = (props: { y: number; payload: { value: React.ReactNode; }; }) => {
//   // console.log(props);

//   return (
//     <g transform={`translate(${0},${props.y})`}>
//       <text x={0} y={0} textAnchor="start" fill="#666">
//         {props.payload.value}
//       </text>
//     </g>
//   );
// };

const SimpleBarChart = () => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        layout="vertical"
        barCategoryGap="20%"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" /*tick={<CustomYAxisTick />}*/ />
        <Tooltip />
        <Bar dataKey="value" label={{ position: 'right' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? 'orange' : 'gray'} />
          ))}{' '}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
