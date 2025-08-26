import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
type DayStyleProps = {
    day?: number;
    isSelected?: boolean;
    isBetween?: boolean;
    isLast?: boolean;
    isFirst?: boolean;
    isDisabled?: boolean;
    isToday: boolean;
};
export declare const dayWrapperStyle: ({ isSelected, isBetween, isLast, isFirst, isToday, isDisabled, }: DayStyleProps & {
    isToday: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const emptyDayStyle: ({ isBetween }: {
    isBetween: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const dayStyle: ({ isSelected, isToday, isDisabled, isBetween }: DayStyleProps) => (theme: Theme) => SerializedStyles;
export {};
