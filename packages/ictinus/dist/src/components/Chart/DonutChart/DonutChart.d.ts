import { default as React } from 'react';
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
declare const DonutChart: React.FCC<DonutChartProps>;
export default DonutChart;
