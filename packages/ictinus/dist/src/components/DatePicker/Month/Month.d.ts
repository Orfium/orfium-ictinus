import { Dayjs } from '../../../utils/date';
import { DisabledDates } from '../DatePicker.types';
import { Range } from '../OverlayComponent/OverlayComponent';
import * as React from 'react';
export type WeekRow = number[];
export type MonthProps = {
    year: number;
    month: number;
    onDaySelect?: (date: Dayjs) => void;
    selectedDays: Range;
    disabledDates?: DisabledDates;
    isFirstCalendar?: boolean;
};
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<MonthProps>>;
export default _default;
