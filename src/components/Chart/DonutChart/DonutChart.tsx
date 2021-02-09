import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import CustomLabel from './components/CustomLabel';
import Wrapper from '../Wrapper';

type Data = {
  name: string;
  value?: number;
  color?: string;
};

export type Props = {
  /** This property defines the data to be shown in the Donut Chart */
  data: Data[];
  /** This property defines the value to be shown in the Donut Chart label */
  chartValue?: string | number;
  /** This property defines the units to be shown in the Donut Chart label*/
  chartUnits?: string;
};

const WrappedChart = Wrapper(PieChart);

const DonutChart: React.FC<Props> = ({ data, chartValue, chartUnits }) => {
  const Colors = useMemo(() => {
    return data.map(obj => {
      if (obj?.color) {
        return obj?.color;
      }

      return '';
    });
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
        <Label
          position="center"
          content={<CustomLabel chartValue={chartValue} chartUnits={chartUnits} />}
        />
      </Pie>
    </WrappedChart>
  );
};

export default DonutChart;
