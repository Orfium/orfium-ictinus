import useTheme from 'hooks/useTheme';
import React from 'react';
import { LabelProps, PolarAngleAxisProps } from 'recharts';

import { flexContainer, labelUnitStyle } from './CustomLabel.style';

type CustomLabelProps = LabelProps & {
  value?: string | number;
  units?: string;
};

const CustomLabel: React.FC<CustomLabelProps> = ({ viewBox, value, units }) => {
  const { cx, cy } = viewBox as PolarAngleAxisProps;
  const theme = useTheme();

  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan
          x="50%"
          dy="-7"
          alignmentBaseline="middle"
          fontSize={theme.typography.fontSizes['16']}
          fill={theme.palette.black}
        >
          {value}
        </tspan>
      </text>
      <foreignObject y="52%" width="100%" height={cy && cy / 2.5}>
        <div css={flexContainer()}>
          <div css={labelUnitStyle()}>{units}</div>
        </div>
      </foreignObject>
    </g>
  );
};

export default CustomLabel;
