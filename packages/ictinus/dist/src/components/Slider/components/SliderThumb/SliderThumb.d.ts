import { FCC } from 'react';
import { IThumbProps } from 'react-range/lib/types';
import { TestProps } from '../../../../utils/types';
export interface SliderThumbProps {
    isDisabled: boolean;
    value: number;
    initialValue: number | undefined;
    restProps: IThumbProps;
}
declare const SliderThumb: FCC<SliderThumbProps & TestProps>;
export default SliderThumb;
