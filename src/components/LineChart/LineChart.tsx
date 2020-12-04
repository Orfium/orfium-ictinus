// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { omit, keys, flatten, uniq, sampleSize } from 'lodash';
import useTheme from '../../hooks/useTheme';
import GradientLine from './components/GradientLine';

type Data = {
  name: string;
  [prop: string]: number | string;
};

type Props = {
  data: Data[];
  labelX?: string;
  labelY?: string;
  showTitles?: boolean;
  color?: (dataLabel: string) => string;
};

const Chart = ({ data = [], labelX, labelY, showTitles = false, color }: Props) => {
  const theme = useTheme();

  const uniqueKeyNames = useMemo(() => {
    return uniq(flatten(data.map(object => keys(omit(object, 'name')))));

    // return uniq(
    //   data.reduce((acc, curr) => {
    //     return [...acc, ...keys(omit(curr, 'name'))];
    //   }, [])
    // );
  }, [data]);

  const colorPicker = useMemo(() => {
    const colorSample = sampleSize(theme.palette.flat, uniqueKeyNames.length);

    return uniqueKeyNames.reduce((acc, key, index) => {
      const definedColor = color && color(key) ? color(key) : colorSample[index]?.[400];
      acc[key] = definedColor;

      return acc;
    }, {});
  }, [uniqueKeyNames, theme, color]);

  const colors = Object.entries(colorPicker);

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
            {colors.map(([dataLabel, color]) => (
              <GradientLine key={`color${dataLabel}`} label={dataLabel} color={color} />
            ))}
          </defs>
          <XAxis
            dataKey="name"
            tickMargin={5}
            axisLine={false}
            tickLine={false}
            label={labelX && { value: labelX, angle: 0, position: 'bottom' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            label={labelY && { value: labelY, angle: -90, position: 'insideLeft' }}
          />
          <CartesianGrid vertical={false} />
          {showTitles && (
            <Legend
              align="left"
              iconType="circle"
              wrapperStyle={{
                paddingTop: '0px',
              }}
            />
          )}
          <Tooltip />
          {colors.map(([dataLabel, color]) => (
            <Area
              key={dataLabel}
              type="linear"
              dataKey={`${dataLabel}`}
              stroke={`${color}`}
              fillOpacity={1}
              fill={`url(#color${dataLabel})`}
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
