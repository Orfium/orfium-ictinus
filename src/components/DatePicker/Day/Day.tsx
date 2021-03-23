/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Dayjs } from 'dayjs';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { dayStyle, dayWrapperStyle, emptyDayStyle } from './Day.style';
import { currentDay } from '../utils';

export type Props = {
  day?: number;
  month: number;
  year: number;
  onSelect?: (date: Dayjs) => void;
  isSelected?: boolean;
  isBetween?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  disabled?: boolean;
};

const Day: React.FC<Props> = ({
  day,
  month,
  year,
  onSelect,
  isSelected = false,
  isBetween = false,
  isLast = false,
  isFirst = false,
  disabled = false,
}) => {
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', 'branded1');
  const date = React.useMemo(
    () =>
      day &&
      currentDay
        .month(month)
        .date(day)
        .year(year),
    [year, day, month]
  );
  const isToday = React.useMemo(() => {
    return currentDay.month() === month && currentDay.year() === year && currentDay.date() === day;
  }, [year, month, day]);

  const onDayClick = React.useCallback(
    e => {
      e.preventDefault();
      if (onSelect && date) {
        onSelect(date);
      }
    },
    [onSelect, date]
  );

  if (!day) {
    return <td css={emptyDayStyle()} />;
  }

  return (
    <td style={{ padding: 0 }} onClick={disabled ? () => {} : onDayClick}>
      <div
        css={dayWrapperStyle({
          isSelected,
          isBetween,
          calculatedColor,
          isLast,
          isFirst,
          isToday,
          disabled,
        })}
      >
        <div
          css={dayStyle({
            isSelected,
            isBetween,
            calculatedColor,
            isLast,
            isFirst,
            isToday,
            disabled,
          })}
        >
          {day}
        </div>
      </div>
    </td>
  );
};

export default React.memo<Props>(Day);
