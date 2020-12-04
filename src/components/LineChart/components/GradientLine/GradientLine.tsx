import React from 'react';

type Props = {
  label: string;
  color: string;
};

const GradientLine = ({ label, color }: Props) => {

  return (
    <linearGradient id={`color${label}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={`${color}`} stopOpacity={0.8} />
      <stop offset="95%" stopColor={`${color}`} stopOpacity={0} />
    </linearGradient>
  );
};

export default React.memo(GradientLine);
