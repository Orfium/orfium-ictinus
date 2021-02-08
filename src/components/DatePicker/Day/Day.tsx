/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useTypeColorToColorMatch } from 'hooks/useTypeColorToColorMatch';
import { dayStyle, dayWrapperStyle, emptyDayStyle } from './Day.style';

export type Props = {
  day?: number;
  month: number;
  year: number;
  onSelect?: (date: Dayjs) => void;
  isSelected: boolean;
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
  isSelected,
  isBetween,
  isLast,
  isFirst,
  disabled,
}) => {
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const calculatedColor = calculateColorBetweenColorAndType('', 'branded1');
  const date = React.useMemo(
    () =>
      day &&
      dayjs()
        .month(month)
        .date(day)
        .year(year),
    [year, day, month]
  );
  const isToday = React.useMemo(() => {
    return dayjs().month() === month && dayjs().year() === year && dayjs().date() === day;
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
    return <div css={emptyDayStyle()} />;
  }

  return (
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
      onClick={disabled ? () => {} : onDayClick}
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
  );
};

export default React.memo(Day);
