import { ResponsiveContainer } from 'recharts';
import type { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

type ChartProps = CategoricalChartProps;

type ChartWrapperProps = ChartProps & {
  aspect?: number;
};

function Wrapper(Component: any) {
  const WrappedChart = ({ children, ...rest }: ChartWrapperProps) => {
    if (import.meta.env.MODE !== 'test') {
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
