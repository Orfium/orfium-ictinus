// // @ts-nocheck
import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';
import max from 'lodash/max';
import CustomTooltip from './components/CustomTooltip';
import useTheme from 'hooks/useTheme';
import CustomLabel from './components/CustomLabel';

const maxYAxisWidth = 220;
const multiplyFactor = 7.8;

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

type Data = {
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
  payload: { value: React.ReactNode };
};

const CustomYAxisTick = ({ colors, y, payload }: YAxisProp) => {
  const theme = useTheme();

  const fill =
    typeof payload.value === 'string' && colors[payload.value]
      ? colors[payload.value]
      : theme.palette.black;

  return (
    <text
      x={0}
      y={y}
      textAnchor="start"
      fill={fill}
    >
      <tspan dy="0.335em">{payload.value}</tspan>
    </text>
  );
};

const CustomBarChart: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const barColors = useMemo(() => {
    return data.map(obj => {
      if (obj?.options?.color) {
        return obj?.options?.color;
      }

      return theme.palette.flat.darkBlue[100];
    });
  }, [data, theme.palette.flat.darkBlue]);

  const maxLabelLength = useMemo(() => max(data.map(obj => obj.name.length)), [data]);

  const yAxisWidth = maxLabelLength ? maxLabelLength * multiplyFactor : 60;

  const labelColoringOptions = useMemo(() => {
    return data.reduce((acc, cur) => {
      const definedColoringOPt = cur.options?.coloringOption;
      if (definedColoringOPt === 'all' && cur.barLabel) {
        acc[cur.barLabel] = cur.options?.color;
      }

      return acc;
    }, {});
  }, [data]);

  const tickColoringOptions = useMemo(() => {
    return data.reduce((acc, cur) => {
      const definedColoringOPt = cur.options?.coloringOption;
      if (definedColoringOPt === 'all') {
        acc[cur.name] = cur.options?.color;
      }

      return acc;
    }, {});
  }, [data]);

  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{ top: 5, right: 60, left: 20, bottom: 5 }}
        layout="vertical"
        barCategoryGap="20%"
      >
        <CartesianGrid offset={{ left: 0 }} horizontal={false} />
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="name"
          tick={props => <CustomYAxisTick {...props} colors={tickColoringOptions} />}
          width={yAxisWidth > maxYAxisWidth ? maxYAxisWidth : yAxisWidth}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip cursor={false} content={<CustomTooltip />} />
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
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
