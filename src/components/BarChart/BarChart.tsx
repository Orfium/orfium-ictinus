import React from 'react';
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
import { LabelProps } from 'recharts';
import max from 'lodash/max';

interface CustomLabelProps extends LabelProps {
  customLabels: string[];
  // index: number;
}

type Option = {
  color?: string;
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

const CustomYAxisTick = (props: { y: number; payload: { value: React.ReactNode } }) => {
  // console.log(props);

  return (
    <text
      // width={props.width}
      // height={props.height}
      x={0}
      y={props.y}
      textAnchor="start"
      // fill="#666"
    >
      <tspan dy="0.335em">{props.payload.value}</tspan>
    </text>
  );
};

// const CustomizedLabel: React.FC<CustomLabelProps> = ({
//   customLabels,
//   x,
//   y,
//   width,
//   height,
//   index,
// }) => {
//   // console.log(props);

//   return (
//     <text
//       // width={props.width}
//       // height={props.height}
//       x={x + width + 16}
//       y={y + height / 2}
//       // textAnchor="start"
//       // fill="#666"
//     >
//       <tspan dy="0.335em" fontWeight="bold">
//         {customLabels[index]}
//       </tspan>
//     </text>
//   );
// };

const CustomizedLabel: React.FC<LabelProps> = ({ value, x, y, width, height }) => {
  // console.log(props);

  return (
    <text x={x + width + 16} y={y + height / 2}>
      <tspan dy="0.335em" fontWeight="bold">
        {value}
      </tspan>
    </text>
  );
};

const SimpleBarChart: React.FC<Props> = ({ data }) => {
  const barColors = data.map(obj => {
    if (obj?.options?.color) {
      return obj?.options?.color;
    }

    return 'gray';
  });

  const barLabels = data.map(obj => {
    if (obj?.barLabel) {
      return obj?.barLabel;
    }

    return '';
  });

  const maxLabelLength = max(
    data.map(obj => {
      console.log(obj.name, obj.name.length);

      return obj.name.length;
    })
  );

  console.log('max', maxLabelLength);

  const yAxisWidth = maxLabelLength * 6.8;

  console.log('width', yAxisWidth);

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
          tick={<CustomYAxisTick />}
          width={yAxisWidth > 220 ? 220 : yAxisWidth}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip cursor={false} />
        <Bar dataKey="value" /*label={<CustomizedLabel customLabels={barLabels} />}*/>
          <LabelList dataKey="barLabel" position="right" content={<CustomizedLabel />} />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index]} />
          ))}{' '}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
