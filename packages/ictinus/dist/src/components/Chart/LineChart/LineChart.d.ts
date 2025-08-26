import { default as React } from 'react';
import { Data } from './utils';
export type LineChartProps = {
    /** This property defines the data to be shown in the Line Chart */
    data: Data[];
    /** Property indicating the label name to be displayed for X axis */
    labelX?: string;
    /** Property indicating the label name to be displayed for Y axis */
    labelY?: string;
    /**  Define if the legend will be displayed */
    isLegendVisible?: boolean;
    /** Function passed as property, so that the user can select colors for each line. If no function is passed or no color is picked for one or more lines, color will be selected randomly  */
    color?: (dataLabel: string) => string;
};
declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
