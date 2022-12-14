import React from 'react';
import { ResponsiveContainer, AreaChartProps, BarChartProps } from 'recharts';

type ChartProps = AreaChartProps & BarChartProps;

type ChartWrapperProps = ChartProps & {
  aspect?: number;
};

function Wrapper(Component: any) {
  const WrappedChart = ({ children, ...rest }: ChartWrapperProps) => {
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
