import React from 'react';
import BarChart from '../../Chart/BarChart';
import { Data } from '../../Chart/BarChart/BarChart';

const data: Data[] = [
  {
    name: 'Orfium',
    value: 857000,
    barLabel: '56.6%',
    options: {
      color: '#f5781b',
      hoverInfo: [
        { name: 'Daily Views', value: 450, percentage: '45%' },
        { name: 'Estimated Partner Revenue', value: 3122, percentage: '76%' },
        { name: 'Daily Views', value: 2030, percentage: '68%' },
        { name: 'Daily Views', value: '654,3M' },
      ],
    },
  },
  { name: 'UMG', value: 230000, barLabel: '15.7%', options: { color: '#c8cade' } },
  {
    name: 'Other',
    value: 18300,
    barLabel: '3.1%',
    options: { color: '#9b9b9b', coloringOption: 'all' },
  },
];

const BarChartShowCase = () => {
  return (
    <div style={{ width: 1000, height: 500 }}>
      <BarChart data={data} />
    </div>
  );
};

export default BarChartShowCase;
