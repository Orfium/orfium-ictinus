import { FCC } from 'react';
import { ITrackProps } from 'react-range/lib/types';
import { TestProps } from '../../../../utils/types';
export type SliderTrackProps = {
    values: number[];
    isDisabled: boolean;
    isSelector: boolean;
    restProps: ITrackProps;
};
declare const SliderTrack: FCC<SliderTrackProps & TestProps>;
export default SliderTrack;
