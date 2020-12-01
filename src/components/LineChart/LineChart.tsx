// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { omit, keys, flatten, uniq, sampleSize } from 'lodash';
import useTheme from '../../hooks/useTheme';

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

  const uniqueKeyNames = useMemo(() => {
    return uniq(
      data.reduce((acc, curr) => {
        return [...acc, ...keys(omit(curr, 'name'))];
      }, [])
    );
  }, [data]);
  
  const colorPicker = useMemo(() => {
    // const uniqueKeyNames = uniq(flatten(data.map(object => keys(omit(object, 'name')))));
    // console.log(uniqueKeyNames);
    // console.log(uniqueKeyNames.length);
    // console.log(theme.palette);
    const colorSample = sampleSize(theme.palette.flat, uniqueKeyNames.length);

    return uniqueKeyNames.reduce((acc, key, index) => {
      acc[key] = colorSample[index]?.[400];

      return acc;
    }, {});
  }, [uniqueKeyNames, theme]);

  return (
    <>
      {uniqueKeyNames.length <= Object.keys(theme.palette.flat).length ? (
        <AreaChart
          width={750}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
        >
          <defs>
            {Object.entries(colorPicker).map(([key, color]) => (
              <linearGradient key={`color${key}`} id={`color${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`${color}`} stopOpacity={0.8} />
                <stop offset="95%" stopColor={`${color}`} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <XAxis dataKey="name" label={labelX && { value: labelX, angle: 0, position: 'bottom' }} />
          <YAxis label={labelY && { value: labelY, angle: -90, position: 'insideLeft' }} />
          <CartesianGrid strokeDasharray="3 3" />
          {showTitles && <Legend align="left" iconType="circle" />}
          <Tooltip />
          {Object.entries(colorPicker).map(([key, color]) => (
            <Area
              key={`${key}`}
              type="linear"
              dataKey={`${key}`}
              stroke={`${color}`}
              fillOpacity={1}
              fill={`url(#color${key})`}
            />
          ))}
        </AreaChart>
      ) : (
        <p>You must define less than {Object.keys(theme.palette.flat).length} different data</p>
      )}
    </>
  );
};

export default Chart;
