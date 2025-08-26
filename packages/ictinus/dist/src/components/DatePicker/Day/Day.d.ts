import { default as React } from 'react';
import { Dayjs } from '../../../utils/date';
export type DayProps = {
    day?: number;
    month: number;
    year: number;
    onSelect?: (date: Dayjs) => void;
    isSelected?: boolean;
    isBetween?: boolean;
    isLast?: boolean;
    isFirst?: boolean;
    isDisabled?: boolean;
    tabIndex?: number;
};
declare const _default: React.NamedExoticComponent<DayProps>;
export default _default;
