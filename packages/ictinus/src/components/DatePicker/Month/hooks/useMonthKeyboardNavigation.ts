import useKeyboardEvents from 'hooks/useKeyboardEvents';
import React from 'react';
import type { KeyboardResult } from 'react-aria';

import { currentDay } from 'components/DatePicker/utils';
import type { MonthProps } from '../Month';

type Props = Omit<MonthProps, 'onDaySelect' | 'disabledDates'>;

type UseMonthKeyboardNavigationResult = {
  focusedDay: number;
  setFocusedDay: React.Dispatch<React.SetStateAction<number>>;
  calendarRef: React.RefObject<HTMLTableElement>;
  keyboardProps: KeyboardResult['keyboardProps'];
};

/**
 * Custom hook that holds all the logic for the keyboard navigation inside the calendar-grid
 */
const useMonthKeyboardNavigation = ({
  selectedDays,
  isFirstCalendar,
  month,
  year,
}: Props): UseMonthKeyboardNavigationResult => {
  const getFocusedDay = React.useMemo(() => {
    if (selectedDays.from) {
      return selectedDays.from.date();
    }

    return currentDay.date();
  }, [selectedDays.from]);

  const [focusedDay, setFocusedDay] = React.useState(isFirstCalendar ? (getFocusedDay ?? 1) : 0);

  const calendarRef = React.useRef<HTMLTableElement>(null);

  const numOfDays = currentDay.month(month).year(year).date(1).daysInMonth();

  const { keyboardProps } = useKeyboardEvents({
    events: {
      keydown: {
        onArrowUp: () => {
          setFocusedDay((prevCursor) => {
            if (prevCursor - 7 < 0) {
              return prevCursor;
            }

            return prevCursor - 7;
          });
        },
        onArrowDown: () => {
          setFocusedDay((prevCursor) => {
            if (prevCursor + 7 > numOfDays) {
              return prevCursor;
            }

            return prevCursor + 7;
          });
        },
        onArrowMove: (__, direction) => {
          if (direction === 'left') {
            setFocusedDay((prevCursor) => {
              if (prevCursor === 0) {
                return 0;
              }

              return prevCursor - 1;
            });
          }

          if (direction === 'right') {
            setFocusedDay((prevCursor) => {
              if (prevCursor === numOfDays) {
                return numOfDays;
              }

              return prevCursor + 1;
            });
          }
        },
      },
    },
    hasPropagation: true,
  });

  React.useEffect(() => {
    if (calendarRef.current) {
      const selectCursor = calendarRef.current.querySelector(`div[tabindex = "0"]`);
      (selectCursor as HTMLInputElement)?.focus();
    }
  }, [focusedDay]);

  return { focusedDay, setFocusedDay, calendarRef, keyboardProps };
};

export default useMonthKeyboardNavigation;
