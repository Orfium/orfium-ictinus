import React from 'react';
import BarChart from './BarChart';

const data = [
  {
    name: 'Orfium',
    value: 654000,
    barLabel: '56.6%',
    options: {
      color: '#f5781b',
      hoverInfo: [
        { name: 'Daily Views', value: 450, percentage: '45%' },
        { name: 'Estimated Partner Revenue', value: 3122 , percentage: '76%' },
        { name: 'Daily Views', value: 2030, percentage: '68%' },
        { name: 'Daily Views', value: '654,3M' },
      ],
    },
  },
  { name: 'UMG', value: 230000, barLabel: '15.7%', options: { color: '#c8cade' } },
  { name: 'Unknown Owners', value: 138000, barLabel: '8.8%', options: { color: '#c8cade' } },
  { name: 'SME', value: 60908, barLabel: '7%', options: { color: '#c8cade' } },
  { name: 'AdRev (3d party)', value: 40800, barLabel: '3.2%', options: { color: '#c8cade' } },
  { name: 'Rock Mobile Corp.', value: 30800, barLabel: '2.4%', options: { color: '#c8cade' } },
  { name: 'UMPG Publishing', value: 7300, barLabel: '1.9%', options: { color: '#c8cade' } },
  { name: 'Karya Anak Haki', value: 4300, barLabel: '0.7%', options: { color: '#c8cade' } },
  { name: 'Adshare (3d party)', value: 3300, barLabel: '0.6%', options: { color: '#c8cade' } },
  { name: 'Other', value: 18300, barLabel: '3.1%', options: { color: '#e7e7e7', coloringOption: 'all' } },
];

const PreviewBarChart = () => {
  return (
    <div style={{ width: 1000, height: 400 }}>
      <BarChart data={data} />
    </div>
  );
};

export default PreviewBarChart;
