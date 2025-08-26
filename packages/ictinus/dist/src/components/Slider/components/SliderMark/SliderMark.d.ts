import { FCC } from 'react';
import { IMarkProps } from 'react-range/lib/types';
import { TestProps } from '../../../../utils/types';
export type SliderMarkProps = {
    values: number[];
    isDisabled: boolean;
    index: number;
    isSelector: boolean;
    restProps: IMarkProps;
};
declare const SliderMark: FCC<SliderMarkProps & TestProps>;
export default SliderMark;
