import useTheme from 'hooks/useTheme';
import max from 'lodash/max';
import { lighten } from 'polished';
import React, { useCallback, useMemo } from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';

import Wrapper from '../Wrapper';
import CustomLabel from './components/CustomLabel';
import CustomTooltip from './components/CustomTooltip';
import CustomTooltipContent from './components/CustomTooltipContent';
import { getValues, customTickFormatter, getBarColors, getColoringOptions } from './utils';

const multiplyFactor = 9.5;
const yAxisWidthDefault = 160;

export type HoverInfo = {
  name: string;
  value?: string | number;
  percentage?: string;
  [prop: string]: number | string | undefined;
};

type Option = {
  color?: string;
  coloringOption?: 'all' | 'bar';
  hoverInfo?: HoverInfo[];
};

export type Data = {
  name: string;
  subcategory?: string;
  value?: number;
  barLabel?: string;
  options?: Option;
};

export type Props = {
  /** This property defines the data to be shown in the Line Chart */
  data: Data[];
};

type YAxisProp = {
  colors: Record<string, string>;
  y: number;
  width: number;
  payload: { value: React.ReactNode };
};

const CustomYAxisTick = ({ colors, y, width, payload }: YAxisProp) => {
  const theme = useTheme();

  const fill =
    typeof payload.value === 'string' && colors[payload.value]
      ? colors[payload.value]
      : theme.palette.black;

  return (
    <g>
      <foreignObject y={y - 10} width={width} height="20" style={{ overflow: 'visible' }}>
        <CustomTooltip content={payload.value} fill={fill} />
      </foreignObject>
    </g>
  );
};

const WrappedChart = Wrapper(RechartsBarChart);

const BarChart: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const barColors = useMemo(() => getBarColors(data, theme.palette.flat.darkBlue[100]), [
    data,
    theme.palette.flat.darkBlue,
  ]);

  const findMaxInData = useCallback(operator => max(data.map(operator)), [data]);

  const setColoringOptions = useCallback(op => getColoringOptions(data, op), [data]);

  const maxLabelLength = findMaxInData((obj: Data) => obj.name.length);

  const maxValue = findMaxInData((obj: Data) => obj.value);

  const yAxisWidth =
    maxLabelLength && maxLabelLength * multiplyFactor < yAxisWidthDefault
      ? maxLabelLength * multiplyFactor
      : yAxisWidthDefault;

  const { maxDomainValue, tickCount } = getValues(maxValue);

  const labelColoringOptions = setColoringOptions(() => false);

  const tickColoringOptions = setColoringOptions((obj: Data) => obj.name);

  return (
    <WrappedChart
      data={data}
      margin={{ top: 5, right: 60, left: 20, bottom: 15 }}
      layout="vertical"
      barCategoryGap="20%"
      maxBarSize={32}
    >
      <CartesianGrid offset={{ left: 0 }} horizontal={false} />
      <XAxis
        type="number"
        axisLine={false}
        tickLine={false}
        tickMargin={24}
        tickCount={tickCount}
        domain={[0, maxDomainValue]}
        tickFormatter={tick => {
          return customTickFormatter(tick, maxDomainValue);
        }}
      />
      <Tooltip
        cursor={{ fill: theme.utils.getColor('lightGrey', 50) }}
        content={<CustomTooltipContent />}
      />
      <Bar dataKey="value">
        <LabelList
          dataKey="barLabel"
          position="right"
          content={<CustomLabel colors={labelColoringOptions} />}
        />
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.name}-${entry.value}`} fill={barColors[index]} />
        ))}{' '}
      </Bar>
      <YAxis
        type="category"
        dataKey="name"
        tick={props => <CustomYAxisTick {...props} colors={tickColoringOptions} />}
        width={yAxisWidth}
        axisLine={false}
        tickLine={false}
      />
    </WrappedChart>
  );
};

export default BarChart;
