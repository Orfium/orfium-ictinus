import { default as React } from 'react';
import { LabelProps } from 'recharts';
interface CustomLabelProps extends LabelProps {
    colors: Record<string, string>;
    index?: number;
}
declare const CustomLabel: React.FCC<CustomLabelProps>;
export default CustomLabel;
