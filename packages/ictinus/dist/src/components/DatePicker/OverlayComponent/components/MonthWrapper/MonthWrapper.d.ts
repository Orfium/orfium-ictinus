import { default as React } from 'react';
import { Dayjs } from '../../../../../utils/date';
import { DisabledDates } from '../../../DatePicker.types';
import { Range } from '../../OverlayComponent';
type MonthWrapperProps = {
    showedArrows?: 'left' | 'right' | 'both';
    isRangePicker?: boolean;
    date: Dayjs;
    selectedDays: Range;
    onDaySelect?: (date: Dayjs) => void;
    handleArrow?: (p: 'forward' | 'back') => void;
    setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    disabledDates?: DisabledDates;
};
declare const _default: React.MemoExoticComponent<({ setDate, onDaySelect, selectedDays, date, handleArrow, showedArrows, disabledDates, isRangePicker, }: MonthWrapperProps) => import("@emotion/react/jsx-runtime").JSX.Element>;
export default _default;
