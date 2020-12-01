// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { omit, keys, flatten, uniq, sampleSize } from 'lodash';
import useTheme from '../../hooks/useTheme';
import { object } from 'prop-types';

// const initData = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 5210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2781,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: [50, 3800, 70],
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

type Data = {
  name: string;
  [prop: string]: number | string;
};

type Props = {
  data: Data[];
  labelX?: string;
  labelY?: string;
  showTitles?: boolean;
};

const Chart = ({ data = [], labelX, labelY, showTitles = false }: Props) => {
  const theme = useTheme();
  const [colors, setColors] = useState({});

  const colorPicker = useMemo(() => {
    // const colors = {};
    const uniqueKeyNames = uniq(flatten(data.map(object => keys(omit(object, 'name')))));
    // console.log(uniqueKeyNames);
    // console.log(uniqueKeyNames.length);
    // console.log(theme.palette);
    const colorSample = sampleSize(theme.palette.flat, uniqueKeyNames.length);

    return uniqueKeyNames.reduce((acc, key, index) => {
      acc[key] = colorSample[index]['400'];

      return acc;
    }, {});
  }, [data, theme]);

  return (
    <AreaChart
      width={750}
      height={400}
      data={data}
      margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
    >
      <defs>
        {Object.entries(colorPicker).map(value => (
          <linearGradient
            key={`color${value[0]}`}
            id={`color${value[0]}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor={`${value[1]}`} stopOpacity={0.8} />
            <stop offset="95%" stopColor={`${value[1]}`} stopOpacity={0} />
          </linearGradient>
        ))}
      </defs>
      <XAxis dataKey="name" label={labelX && { value: labelX, angle: 0, position: 'bottom' }} />
      <YAxis label={labelY && { value: labelY, angle: -90, position: 'insideLeft' }} />
      <CartesianGrid strokeDasharray="3 3" />
      {showTitles && <Legend align="left" iconType="circle" />}
      <Tooltip />
      {Object.entries(colorPicker).map(value => (
        <Area
          key={`${value[0]}`}
          type="linear"
          dataKey={`${value[0]}`}
          stroke={`${value[1]}`}
          fillOpacity={1}
          fill={`url(#color${value[0]})`}
        />
      ))}
      {/* <Area type="linear" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="linear" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      <Area type="linear" dataKey="amt" stroke="#FF0000" fillOpacity={1} fill="url(#colorAmt)" /> */}
    </AreaChart>
  );
};

export default Chart;
