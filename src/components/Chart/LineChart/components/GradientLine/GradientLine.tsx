import React from 'react';

type GradientLineProps = {
  dataLabel: string;
  color: string;
};

const GradientLine = ({ dataLabel, color }: GradientLineProps) => {
  return (
    <linearGradient id={`color${dataLabel}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={`${color}`} stopOpacity={0.4} />
      <stop offset="95%" stopColor={`${color}`} stopOpacity={0} />
    </linearGradient>
  );
};

export default React.memo(GradientLine);
