import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
type ChartProps = CategoricalChartProps;
type ChartWrapperProps = ChartProps & {
    aspect?: number;
};
declare function Wrapper(Component: any): ({ children, ...rest }: ChartWrapperProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Wrapper;
