import useTheme from 'hooks/useTheme';
import { max } from 'lodash-es';
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

import CustomLabel from './components/CustomLabel';
import CustomTooltip from './components/CustomTooltip';
import CustomTooltipContent from './components/CustomTooltipContent';
import { getValues, customTickFormatter, getBarColors, getColoringOptions } from './utils';
import Wrapper from '../Wrapper';

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

export type BarChartProps = {
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
      : theme.globals.oldColors.black;

  return (
    <g>
      <foreignObject y={y - 10} width={width} height="20" style={{ overflow: 'visible' }}>
        <CustomTooltip content={payload.value} fill={fill} />
      </foreignObject>
    </g>
  );
};

const WrappedChart = Wrapper(RechartsBarChart);

const BarChart: React.FCC<BarChartProps> = ({ data }) => {
  const theme = useTheme();

  const barColors = useMemo(
    () => getBarColors(data, theme.globals.oldColors.flat.darkBlue[100]),
    [data, theme.globals.oldColors.flat.darkBlue]
  );

  const findMaxInData = useCallback(
    (operator: (obj: Data) => number | undefined) => max(data.map(operator)),
    [data]
  );

  const setColoringOptions = useCallback(
    // @ts-ignore @TODO Ignoring this as this component will be under further investigation of what we need to keep
    (op: (obj: Data) => boolean | string) => getColoringOptions(data, op),
    [data]
  );

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
      <CartesianGrid horizontal={false} />
      <XAxis
        type="number"
        axisLine={false}
        tickLine={false}
        tickMargin={24}
        tickCount={tickCount}
        domain={[0, maxDomainValue]}
        tickFormatter={(tick) => {
          return customTickFormatter(tick, maxDomainValue);
        }}
      />
      <Tooltip
        cursor={{ fill: theme.tokens.colors.get('backgroundColor.alt') }}
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
        tick={(props) => <CustomYAxisTick {...props} colors={tickColoringOptions} />}
        width={yAxisWidth}
        axisLine={false}
        tickLine={false}
      />
    </WrappedChart>
  );
};

export default BarChart;
