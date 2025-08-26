import { default as React } from 'react';
import { MonthProps } from '../Month';
type Props = Omit<MonthProps, 'onDaySelect' | 'disabledDates'>;
/**
 * Custom hook that holds all the logic for the keyboard navigation inside the calendar-grid
 */
declare const useMonthKeyboardNavigation: ({ selectedDays, isFirstCalendar, month, year }: Props) => {
    focusedDay: number;
    setFocusedDay: React.Dispatch<React.SetStateAction<number>>;
    calendarRef: React.MutableRefObject<HTMLTableElement>;
    keyboardProps: import('@react-types/shared').DOMAttributes<import('@react-types/shared').FocusableElement>;
};
export default useMonthKeyboardNavigation;
