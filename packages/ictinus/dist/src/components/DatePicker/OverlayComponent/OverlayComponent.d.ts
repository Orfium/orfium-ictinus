import { Dayjs } from '../../../utils/date';
import { DisabledDates, ExtraOption } from '../DatePicker.types';
import * as React from 'react';
export type OverlayComponentProps = {
    selectedOption?: string;
    onClearAll?: () => void;
    onApply?: () => void;
    setSelectedOption?: (x: string) => void;
    isRangePicker?: boolean;
    extraOptions?: ExtraOption[];
    selectedDays: Range;
    onDaySelect: (date: Dayjs) => void;
    disabledDates?: DisabledDates;
};
export type Range = {
    from?: Dayjs;
    to?: Dayjs;
};
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<OverlayComponentProps>>;
export default _default;
