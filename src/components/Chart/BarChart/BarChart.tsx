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
import max from 'lodash/max';
import { lighten } from 'polished';
import CustomTooltipContent from './components/CustomTooltipContent';
import CustomTooltip from './components/CustomTooltip';
import useTheme from 'hooks/useTheme';
import CustomLabel from './components/CustomLabel';
import { getValues, customTickFormatter } from './utils';
import Wrapper from '../Wrapper';

const multiplyFactor = 6.8;
const yAxisWidthDefault = 60;
const lightenFactor = 0.2;

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
  payload: { value: React.ReactNode };
};

const CustomYAxisTick = ({ colors, y, payload, ...rest }: YAxisProp) => {
  const theme = useTheme();
  // console.log(rest);

  const fill =
    typeof payload.value === 'string' && colors[payload.value]
      ? colors[payload.value]
      : theme.palette.black;

  return (
    <g>
      {/* <text x={0} y={y} textAnchor="start" fill={fill}>
        <tspan dy="0.335em">{payload.value}</tspan>
      </text> */}
      <foreignObject y={y - 10} width={rest.width} height="20" style={{ overflow: 'visible' }}>
        {/* <div
          style={{
            width: 'inherit',
            height: 'inherit',
            // border: '3px solid #73AD21',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        > */}
        <CustomTooltip content={payload.value}>{payload.value}</CustomTooltip>
        {/* </div> */}
      </foreignObject>
    </g>
  );
};

const WrappedChart = Wrapper(RechartsBarChart);

const BarChart: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const barColors = useMemo(() => {
    return data.map(obj => {
      if (obj?.options?.color) {
        if (obj?.options?.coloringOption === 'all') {
          return lighten(lightenFactor, obj?.options?.color);
        }

        return obj?.options?.color;
      }

      return theme.palette.flat.darkBlue[100];
    });
  }, [data, theme.palette.flat.darkBlue]);

  const findMaxInData = useCallback(operator => max(data.map(operator)), [data]);

  const setColoringOptions = useCallback(
    operator => {
      return data.reduce((acc, cur, index) => {
        const definedColoringOPt = cur.options?.coloringOption;
        if (definedColoringOPt === 'all') {
          if (operator && operator(cur)) {
            acc[operator(cur)] = cur.options?.color;
          } else {
            acc[index] = cur.options?.color;
          }
        }

        return acc;
      }, {});
    },
    [data]
  );

  const maxLabelLength = findMaxInData((obj: Data) => obj.name.length);

  const maxValue = findMaxInData((obj: Data) => obj.value);

  const yAxisWidth = maxLabelLength ? maxLabelLength * multiplyFactor : yAxisWidthDefault;

  const { maxDomainValue, tickCount } = getValues(maxValue);

  const labelColoringOptions = setColoringOptions(() => false);

  const tickColoringOptions = setColoringOptions((obj: Data) => obj.name);

  return (
    <WrappedChart
      data={data}
      margin={{ top: 5, right: 60, left: 20, bottom: 5 }}
      layout="vertical"
      barCategoryGap="20%"
    >
      <CartesianGrid offset={{ left: 0 }} horizontal={false} />
      <XAxis
        type="number"
        axisLine={false}
        tickLine={false}
        tickCount={tickCount}
        domain={[0, maxDomainValue]}
        tickFormatter={tick => {
          return customTickFormatter(tick, maxDomainValue);
        }}
      />
      <YAxis
        type="category"
        dataKey="name"
        tick={props => <CustomYAxisTick {...props} colors={tickColoringOptions} />}
        width={160}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        cursor={{ fill: theme.utils.getColor('lightGray', 100) }}
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
    </WrappedChart>
  );
};

export default BarChart;
