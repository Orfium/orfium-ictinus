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
  LabelProps,
} from 'recharts';
import max from 'lodash/max';
import CustomTooltip from './components/CustomTooltip';
import useTheme from '../../hooks/useTheme';

interface CustomLabelProps extends LabelProps {
  colors: Record<string, string>;
}

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

type Props = {
  data: Data[];
};

const CustomYAxisTick = (props: {
  colors: Record<string, string>;
  y: number;
  payload: { value: React.ReactNode };
}) => {
  console.log(props);

  return (
    <text
      // width={props.width}
      // height={props.height}
      x={0}
      y={props.y}
      textAnchor="start"
      fill="#666"
    >
      <tspan dy="0.335em">{props.payload.value}</tspan>
    </text>
  );
};

const CustomizedLabel: React.FC<CustomLabelProps> = ({ colors, value, x, y, width, height }) => {
  const theme = useTheme();
  // console.log(props);
  // console.log('in function', colors);
  // console.log(colors[value], value);

  return (
    <text x={x + width + 16} y={y + height / 2}>
      <tspan
        dy="0.335em"
        fontWeight="bold"
        fill={value && colors[value] ? colors[value] : theme.palette.black}
      >
        {value}
      </tspan>
    </text>
  );
};

const SimpleBarChart: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const barColors = useMemo(() => {
    return data.map(obj => {
      if (obj?.options?.color) {
        return obj?.options?.color;
      }

      return theme.palette.flat.darkBlue[100];
    });
  }, [data]);

  const maxLabelLength = useMemo(() => max(data.map(obj => obj.name.length)), [data]);

  // console.log('max', maxLabelLength);

  const yAxisWidth = maxLabelLength ? maxLabelLength * 7.8 : 60;

  // console.log('width', yAxisWidth);

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

  console.log(labelColoringOptions, tickColoringOptions);

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
          tick={CustomYAxisTick}
          width={yAxisWidth > 220 ? 220 : yAxisWidth}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={false}
          payload={[{ name: '05-01', value: 12, unit: 'kg' }]}
          content={<CustomTooltip />}
        />
        <Bar dataKey="value">
          <LabelList
            dataKey="barLabel"
            position="right"
            content={<CustomizedLabel colors={labelColoringOptions} />}
          />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index]} />
          ))}{' '}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
