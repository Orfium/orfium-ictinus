import React from 'react';
import { LabelProps } from 'recharts';

import useTheme from 'hooks/useTheme';

const xValueBase = 16;
const divisor = 2;
interface CustomLabelProps extends LabelProps {
  colors: Record<string, string>;
  index?: number;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ colors, value, x, y, width, height, index }) => {
  const theme = useTheme();
  const xValue = x && width ? x + width + xValueBase : xValueBase;
  const yValue = y && height ? y + height / divisor : 0;
  const fill = index && colors[index] ? colors[index] : theme.palette.black;

  return (
    <text x={xValue} y={yValue}>
      <tspan dy="0.335em" fontWeight="bold" fill={fill}>
        {value}
      </tspan>
    </text>
  );
};

export default CustomLabel;
