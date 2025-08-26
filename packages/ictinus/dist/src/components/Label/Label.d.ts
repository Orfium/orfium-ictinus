import { ComponentSizes } from '../../utils/types';
import * as React from 'react';
export type LabelProps = {
    /** If the label has error */
    hasError?: boolean;
    /** The label that is going to be displayed */
    label: string;
    /** If the label value is required */
    isRequired: boolean;
    /** If the label must be moved to the top */
    isAnimated?: boolean;
    /** HTML <label/>'s for prop */
    htmlFor?: string;
    /** The size of the label */
    size?: ComponentSizes;
};
declare const Label: React.FCC<LabelProps>;
export default Label;
