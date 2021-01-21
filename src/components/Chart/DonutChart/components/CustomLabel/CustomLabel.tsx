import React from 'react';
import { LabelProps, PolarViewBox } from 'recharts';
import useTheme from 'hooks/useTheme';

interface CustomLabelProps extends LabelProps {
  chartValue?: string | number;
  chartUnits?: string | number;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ viewBox, chartValue, chartUnits }) => {
  const { cx, cy } = viewBox as PolarViewBox;
  const theme = useTheme();

  return (
    <text
      x={cx}
      y={cy}
      className="recharts-text recharts-label"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan
        x="50%"
        dy="-5"
        alignmentBaseline="middle"
        fontSize={theme.typography.fontSizes['16']}
        fill={theme.palette.black}
      >
        {chartValue}
      </tspan>
      <tspan
        x="50%"
        dy="15"
        alignmentBaseline="middle"
        fontSize={theme.typography.fontSizes['12']}
        fill={theme.utils.getColor('lightGray', 500)}
      >
        {chartUnits}
      </tspan>
    </text>
  );
};

export default CustomLabel;
