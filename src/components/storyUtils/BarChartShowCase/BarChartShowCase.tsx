import React from 'react';

import BarChart from '../../Chart/BarChart';
import type { Data } from '../../Chart/BarChart/BarChart';

const data: Data[] = [
  {
    name: 'Example 1',
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
  { name: 'Example 2', value: 230000, barLabel: '15.7%', options: { color: '#c8cade' } },
  { name: 'Example 3', value: 138000, barLabel: '8.8%', options: { color: '#c8cade' } },
  {
    name: 'Example 4',
    value: 60908,
    barLabel: '7%',
    options: { color: '#c8cade' },
  },
];

const BarChartShowCase = ({
  width = 1000,
  height = 500,
}: {
  width?: string | number;
  height?: string | number;
}) => {
  return (
    <div style={{ width, height }}>
      <BarChart data={data} />
    </div>
  );
};

export default BarChartShowCase;
