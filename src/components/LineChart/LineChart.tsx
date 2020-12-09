// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck
// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// /* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { omit, keys, flatten, uniq, sampleSize } from 'lodash';
import useTheme from '../../hooks/useTheme';
import GradientLine from './components/GradientLine';
import CustomTooltip from './components/CustomTooltip';

type Data = {
  name: string;
  [prop: string]: number | string;
};

type Props = {
  data: Data[];
  labelX?: string;
  labelY?: string;
  showLegend?: boolean;
  color?: (dataLabel: string) => string;
};

const Chart = ({ data = [], labelX, labelY, showLegend = false, color }: Props) => {
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

    return uniqueKeyNames.reduce<Record<string, string>>((acc, key, index) => {
      const definedColor = color && color(key) ? color(key) : colorSample[index]?.[400];
      acc[key] = definedColor;

      return acc;
    }, {});
  }, [uniqueKeyNames, theme, color]);

  const colors = Object.entries(colorPicker);

  return (
    <>
      {uniqueKeyNames.length <= Object.keys(theme.palette.flat).length ? (
        <ResponsiveContainer width="80%" aspect={1.5}>
          <AreaChart
            // width={900}
            // height={500}
            data={data}
            margin={{ top: 10, right: 20, left: 20, bottom: 50 }}
          >
            <defs>
              {colors.map(([dataLabel, color]) => (
                <GradientLine key={`color${dataLabel}`} label={dataLabel} color={color} />
              ))}
            </defs>
            <XAxis
              // padding={{ left: 100, right: 18 }}
              dataKey="name"
              tickMargin={31}
              axisLine={false}
              tickLine={false}
              label={labelX && { value: labelX, angle: 0, position: 'bottom', offset: 35 }}
            />
            <YAxis
              // orientation='right'
              // tick={{ stroke: 'red', strokeWidth: 2 }}
              // padding={{ top: 10, bottom: 50 }}
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
                  paddingTop: '50px',
                  paddingLeft: '13px',
                }}
              />
            )}
            <Tooltip cursor={false} content={<CustomTooltip />} />
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
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <p>You must define less than {Object.keys(theme.palette.flat).length} different data</p>
      )}
    </>
  );
};

export default Chart;
