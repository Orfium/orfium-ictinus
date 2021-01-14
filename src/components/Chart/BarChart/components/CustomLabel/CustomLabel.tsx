import React from 'react';
import { LabelProps } from 'recharts';
import useTheme from 'hooks/useTheme';

interface CustomLabelProps extends LabelProps {
  colors: Record<string, string>;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ colors, value, x, y, width, height }) => {
  const theme = useTheme();
  const xValue = x && width ? x + width + 16 : 16;
  const yValue = y && height ? y + height / 2 : 0;
  const fill = value && colors[value] ? colors[value] : theme.palette.black;

  return (
    <text x={xValue} y={yValue}>
      <tspan dy="0.335em" fontWeight="bold" fill={fill}>
        {value}
      </tspan>
    </text>
  );
};

export default CustomLabel;
