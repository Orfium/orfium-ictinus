import { default as React } from 'react';
import { LabelProps } from 'recharts';
type CustomLabelProps = LabelProps & {
    value?: string | number;
    units?: string;
};
declare const CustomLabel: React.FCC<CustomLabelProps>;
export default CustomLabel;
