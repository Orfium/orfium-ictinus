import React from 'react';
import { Dayjs } from 'utils/date';

import { dayStyle, dayWrapperStyle, emptyDayStyle } from './Day.style';
import { currentDay } from '../utils';

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

const Day: React.FC<DayProps> = ({
  day,
  month,
  year,
  onSelect,
  isSelected = false,
  isBetween = false,
  isLast = false,
  isFirst = false,
  isDisabled = false,
  tabIndex,
}) => {
  const date = React.useMemo(
    () => day && currentDay.month(month).date(day).year(year),
    [year, day, month]
  );
  const isToday = React.useMemo(() => {
    return currentDay.month() === month && currentDay.year() === year && currentDay.date() === day;
  }, [year, month, day]);

  const onDayClick = React.useCallback(
    (e) => {
      e.preventDefault();
      if (onSelect && date) {
        onSelect(date);
      }
    },
    [onSelect, date]
  );

  if (!day) {
    return <td css={emptyDayStyle({ isBetween })} />;
  }

  return (
    <td style={{ padding: 0 }} onClick={isDisabled ? undefined : onDayClick}>
      <div
        css={dayWrapperStyle({
          isSelected,
          isBetween,
          isLast,
          isFirst,
          isToday,
          isDisabled,
        })}
        tabIndex={tabIndex}
        data-testid={`${day}_${month + 1}_${year}` + `${isSelected ? '_selected' : ''}`}
        onKeyDown={(e) => {
          if (e.code === 'Enter' && !isDisabled) {
            onDayClick(e);
          }
        }}
      >
        <div
          css={dayStyle({
            isSelected,
            isBetween,
            isLast,
            isFirst,
            isToday,
            isDisabled,
          })}
        >
          {day}
        </div>
      </div>
    </td>
  );
};

export default React.memo<DayProps>(Day);
