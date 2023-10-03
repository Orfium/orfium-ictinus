import React from 'react';
import { ResponsiveContainer } from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

type ChartProps = CategoricalChartProps;

type Props = ChartProps & {
  aspect?: number;
};

function Wrapper(Component: any) {
  const WrappedChart = ({ children, ...rest }: Props) => {
    if (process.env.NODE_ENV !== 'test') {
      return (
        <ResponsiveContainer aspect={rest?.aspect}>
          <Component {...rest}>{children}</Component>
        </ResponsiveContainer>
      );
    }

    return (
      <Component width={1000} height={500} {...rest}>
        {children}
      </Component>
    );
  };

  return WrappedChart;
}

export default Wrapper;
