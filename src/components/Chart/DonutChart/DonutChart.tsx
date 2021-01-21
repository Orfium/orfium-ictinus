import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import CustomLabel from './components/CustomLabel';

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
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper: React.FC = ({ children }) => {
  if (process.env.NODE_ENV !== 'test') {
    return (
      <ResponsiveContainer>
        <PieChart>{children}</PieChart>
      </ResponsiveContainer>
    );
  }

  // for testing purposes only !!!
  return (
    <PieChart width={400} height={400}>
      {children}
    </PieChart>
  );
};

export default DonutChart;
