import useTheme from 'hooks/useTheme';
import React from 'react';
import type { LabelProps } from 'recharts';

const xValueBase = 16;
const divisor = 2;
interface CustomLabelProps extends LabelProps {
  colors: Record<string, string>;
  index?: number;
}

const CustomLabel: React.FCC<CustomLabelProps> = ({
  colors,
  value,
  x,
  y,
  width,
  height,
  index,
}) => {
  const theme = useTheme();
  const xValue = x && width ? Number(x) + Number(width) + xValueBase : xValueBase;
  const yValue = y && height ? Number(y) + Number(height) / divisor : 0;
  const fill = index && colors[index] ? colors[index] : theme.globals.oldColors.black;

  return (
    <text x={xValue} y={yValue}>
      <tspan dy="0.335em" fontWeight="bold" fill={fill}>
        {value}
      </tspan>
    </text>
  );
};

export default CustomLabel;
