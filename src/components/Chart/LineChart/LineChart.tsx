import { rem } from 'polished';
import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import useTheme from '../../../hooks/useTheme';
import Wrapper from '../Wrapper';
import CustomTooltip from './components/CustomTooltip';
import GradientLine from './components/GradientLine';
import { Data, getKeyNames, colorPicker } from './utils';

export type Props = {
  /** This property defines the data to be shown in the Line Chart */
  data: Data[];
  /** Property indicating the label name to be displayed for X axis */
  labelX?: string;
  /** Property indicating the label name to be displayed for Y axis */
  labelY?: string;
  /**  Define if the legend will be displayed */
  showLegend?: boolean;
  /** Function passed as property, so that the user can select colors for each line. If no function is passed or no color is picked for one or more lines, color will be selected randomly  */
  color?: (dataLabel: string) => string;
};

const WrappedChart = Wrapper(AreaChart);

const LineChart: React.FC<Props> = ({ data, labelX, labelY, showLegend = false, color }) => {
  const theme = useTheme();

  const uniqueKeyNames = useMemo(() => getKeyNames(data), [data]);

  const colorsPicked = useMemo(
    () => colorPicker({ theme, uniqueKeyNames, color }),

    [theme, uniqueKeyNames, color]
  );

  const colors = Object.entries(colorsPicked);

  return uniqueKeyNames.length <= Object.keys(theme.palette.flat).length ? (
    <WrappedChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 50 }} aspect={1.5}>
      <defs>
        {colors.map(([dataLabel, color]) => (
          <GradientLine key={`color${dataLabel}`} dataLabel={dataLabel} color={color} />
        ))}
      </defs>
      <XAxis
        dataKey="name"
        tickMargin={31}
        axisLine={false}
        tickLine={false}
        label={labelX && { value: labelX, angle: 0, position: 'bottom', offset: 35 }}
      />
      <YAxis
        tick={{ textAnchor: 'start' }}
        tickMargin={40}
        axisLine={false}
        tickLine={false}
        label={labelY && { value: labelY, angle: -90, position: 'left', offset: 15 }}
      />
      <CartesianGrid vertical={false} />
      {showLegend && (
        <Legend
          align="left"
          iconType="circle"
          iconSize={16}
          wrapperStyle={{
            paddingTop: rem(50),
            paddingLeft: rem(13),
          }}
        />
      )}
      <Tooltip
        cursor={{ stroke: theme.utils.getColor('lightGray', 300), strokeWidth: 1 }}
        content={<CustomTooltip />}
      />
      {colors.map(([dataLabel, color]) => (
        <Area
          key={dataLabel}
          type="linear"
          dataKey={dataLabel}
          stroke={color}
          fillOpacity={1}
          fill={`url(#color${dataLabel})`}
          activeDot={{ r: 3, stroke: 'none' }}
          dot={{ r: 3, fill: color }}
        />
      ))}
    </WrappedChart>
  ) : (
    <p>You must define less than {Object.keys(theme.palette.flat).length} different data</p>
  );
};

export default LineChart;
