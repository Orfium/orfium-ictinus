import { default as React } from 'react';
import { TestProps } from '../../utils/types';
import { NumberFieldProps } from '../NumberField';
export type SliderProps = {
    /** Determines if the Slider is disabled or not */
    isDisabled?: boolean;
    /** Determines if the Slider will show increments along its track */
    hasIncrements?: boolean;
    /** Called when a thumb is moved, provides new values */
    onChange: (values: number[]) => void;
    /** Called when a change is finished (mouse/touch up, or keyup), provides current values.
     * Use this event when you have to make for example ajax request with new values. */
    onBlur?: (values: number[]) => void;
    /** Determines the position of the rendered thumbs and the type of the Slider. 1 value means it's a Selector,
     * while 2 values mean it's a Range. Defaults to [0, 100] */
    values: [number] | [number, number];
    /** NumberField props */
    numberFieldOptions?: Partial<NumberFieldProps>;
};
export declare const STEP_WITH_INCREMENTS = 20;
export declare const MIN = 0;
export declare const MAX = 100;
declare const Slider: React.FC<SliderProps & TestProps>;
export default Slider;
