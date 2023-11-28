import React from 'react';

import BarChart from '../../Chart/BarChart';
import type { Data } from '../../Chart/BarChart/BarChart';

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
  { name: 'Saregama Publishing', value: 138000, barLabel: '8.8%', options: { color: '#c8cade' } },
  {
    name: 'PT. Mahar Pustaka Nusantara',
    value: 60908,
    barLabel: '7%',
    options: { color: '#c8cade' },
  },
  { name: 'AdRev (3d party)', value: 40800, barLabel: '3.2%', options: { color: '#c8cade' } },
  { name: 'Rock Mobile Corp.', value: 30800, barLabel: '2.4%', options: { color: '#c8cade' } },
  {
    name: 'PT HARMONI DWISELARAS PUBLISHERINDO',
    value: 7300,
    barLabel: '1.9%',
    options: { color: '#c8cade' },
  },
  { name: 'Karya Anak Haki', value: 4300, barLabel: '0.7%', options: { color: '#c8cade' } },
  { name: 'Adshare (3d party)', value: 3300, barLabel: '0.6%', options: { color: '#c8cade' } },
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
