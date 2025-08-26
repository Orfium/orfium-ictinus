import { default as React } from 'react';
export type HoverInfo = {
    name: string;
    value?: string | number;
    percentage?: string;
    [prop: string]: number | string | undefined;
};
type Option = {
    color?: string;
    coloringOption?: 'all' | 'bar';
    hoverInfo?: HoverInfo[];
};
export type Data = {
    name: string;
    subcategory?: string;
    value?: number;
    barLabel?: string;
    options?: Option;
};
export type BarChartProps = {
    /** This property defines the data to be shown in the Line Chart */
    data: Data[];
};
declare const BarChart: React.FCC<BarChartProps>;
export default BarChart;
