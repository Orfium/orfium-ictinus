import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

import Wrapper from '../Wrapper';
import CustomLabel from './components/CustomLabel';

type Data = {
  name: string;
  value: number;
  color?: string;
};

export type DonutChartProps = {
  /** This property defines the data to be shown in the Donut Chart */
  data: Data[];
  /** This property defines the value to be shown in the Donut Chart label */
  value?: string | number;
  /** This property defines the units to be shown in the Donut Chart label*/
  units?: string;
};

const WrappedChart = Wrapper(PieChart);

const DonutChart: React.FC<DonutChartProps> = ({ data, value, units }) => {
  const Colors = useMemo(() => {
    return data.map((obj) => obj?.color || '');
  }, [data]);

  return (
    <WrappedChart>
      <Pie
        data={data}
        innerRadius="85%"
        outerRadius="100%"
        paddingAngle={0}
        startAngle={90}
        endAngle={-270}
        dataKey="value"
        blendStroke
      >
        {data.map((entry, index) => (
          <Cell key={`cell--${entry.name}-${entry.value}`} fill={Colors[index]} />
        ))}
        <Label position="center" content={<CustomLabel value={value} units={units} />} />
      </Pie>
    </WrappedChart>
  );
};

export default DonutChart;
