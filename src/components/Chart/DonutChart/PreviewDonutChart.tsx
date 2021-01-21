import React from 'react';
import DonutChart from './DonutChart';

const totalClaims = 1102545485;
const orfiumViewsPercentage = 0.129;
const otherViewsPercentage = 1 - orfiumViewsPercentage;

const data = [
  { name: 'Orfium', value: totalClaims * orfiumViewsPercentage, color: '#f5781b' },
  { name: 'Others', value: totalClaims * otherViewsPercentage, color: '#dfdfdf' },
];

type Props = {
  chartValue?: string | number;
  chartUnits?: string;
};

const PreviewDonutChart: React.FC<Props> = ({ chartValue, chartUnits }) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <DonutChart data={data} chartValue={chartValue} chartUnits={chartUnits} />
    </div>
  );
};

export default PreviewDonutChart;
